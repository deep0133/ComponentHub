import { Suspense, lazy, useContext, useEffect } from "react";
import Header from "./components/Header";
const Main = lazy(() => import("./components/Main"));
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { ComponentContext, UserContext } from "./context/CreateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopUp from "./components/PopUp";
function App() {
  const { myProfile } = useContext(UserContext);
  const { fetchAllComponents } = useContext(ComponentContext);

  useEffect(() => {
    myProfile();
    fetchAllComponents();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <div className='max-w-screen-xl relative my-5 mx-auto'>
        <Suspense
          fallback={
            <>
              <div className='flex justify-center items-center w-full min-h-[80svh]'>
                <Loader />
              </div>
            </>
          }>
          <Main />
        </Suspense>
      </div>
      <PopUp />
      <Footer />
    </>
  );
}

export default App;
