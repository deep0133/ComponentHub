import { useState } from "react";
import { UserContext } from "../CreateContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const myProfile = async () => {
    const url = "http://localhost:5000/auth/me";

    try {
      const token = `Bearer ${localStorage.getItem("token")}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const register = async (name, email, password) => {
    try {
      const url = "http://localhost:5000/auth/register";
      const token = `Bearer ${localStorage.getItem("token")}`;
      setLoader(true);

      const detail = {
        name,
        email,
        password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(detail),
      });

      const data = await response.json();

      setUser(data.user);

      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(`Welcome ${data.user.name}`);
      }
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoader(false);
    }
  };

  const login = async (email, password) => {
    try {
      const url = "http://localhost:5000/auth/login";

      const detail = {
        email,
        password,
      };

      setLoader(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
        credentials: "include",
      });

      const data = await response.json();

      setUser(data.user);

      if (data.success) {
        toast.success(`Welcome Back ${data.user.name}`);
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoader(false);
    }
  };

  const updateProfile = async (updatedData) => {
    try {
      const url = "http://localhost:5000/auth/update";
      const token = `Bearer ${localStorage.getItem("token")}`;

      setLoader(true);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(updatedData),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        toast.success(` ${data.message}`);
        await localStorage.setItem("token", data.token);
        myProfile();
      }
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      setLoader(false);
    }
  };

  const logout = async () => {
    try {
      const url = "http://localhost:5000/auth/logout";

      const token = `Bearer ${localStorage.getItem("token")}`;

      await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        Authorization: token,
        credentials: "include",
      });

      setUser(null);
      localStorage.removeItem("token");
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        myProfile,
        register,
        login,
        logout,
        loader,
        setLoader,
        popUp,
        setPopUp,
        updateProfile,
      }}>
      {children}
    </UserContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export default ContextProvider;
