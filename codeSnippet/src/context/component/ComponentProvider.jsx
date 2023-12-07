import { useContext, useState } from "react";
import { ComponentContext, UserContext } from "../CreateContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
function ComponentProvider({ children }) {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});

  const { myProfile, loader, setLoader } = useContext(UserContext);

  async function fetchAllComponents() {
    try {
      setLoader(true);
      const api = "http://localhost:5000/code/all";
      const response = await fetch(api);
      const data = await response.json();
      setData(data);
      setShowData(data);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoader(false);
    }
  }

  const addComponent = async (title, language, codeSnippet) => {
    const url = "http://localhost:5000/code/add";
    setLoader(true);
    const token = `Bearer ${localStorage.getItem("token")}`;
    const codeData = {
      title,
      language,
      codeSnippet,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(codeData),
    });

    const data = await response.json();

    toast.success(data.message);

    if (data.success) {
      fetchAllComponents();
      myProfile();
    }
    setLoader(false);
  };

  const deleteComponent = async (id) => {
    const url = "http://localhost:5000/code/remove";

    const codeData = {
      codeId: id,
    };

    const token = `Bearer ${localStorage.getItem("token")}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(codeData),
    });

    const data = await response.json();
    toast.success(data.message);

    if (data.success) {
      fetchAllComponents();
      myProfile();
    }
  };

  const filterComponents = (str) => {
    try {
      setLoader(true);
      if (str === "all") return setShowData(data);

      const components = data.components;
      const filteredData = [];

      for (let i = 0; i < components.length; i++) {
        const ele_1 = components[i];
        const snippets = ele_1.snippets;

        const data = {
          userId: ele_1.userId,
        };
        const userData = [];

        for (let j = 0; j < snippets.length; j++) {
          const ele_2 = snippets[j];
          if (ele_2.title.toLowerCase().includes(str.toLowerCase())) {
            userData.push(ele_2);
          }
        }

        if (userData.length > 0) {
          data.snippets = userData;
          filteredData.push(data);
        }
      }
      setShowData({ components: filteredData });
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ComponentContext.Provider
      value={{
        data,
        showData,
        setShowData,
        fetchAllComponents,
        addComponent,
        deleteComponent,
        filterComponents,
        loader,
      }}>
      {children}
    </ComponentContext.Provider>
  );
}

ComponentProvider.propTypes = {
  children: PropTypes.object,
};

export default ComponentProvider;
