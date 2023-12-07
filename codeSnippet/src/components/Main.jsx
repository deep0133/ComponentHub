import { Suspense, useContext, useState, lazy } from "react";
import Loader from "./Loader";
const Login = lazy(() => import("./Login"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Register = lazy(() => import("./Register"));
const QuickGuid = lazy(() => import("./QuickGuid"));
const AddComponent = lazy(() => import("./AddComponent"));
const ShowComponents = lazy(() => import("./ShowComponents"));
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ComponentContext, UserContext } from "../context/CreateContext";
import NotFound from "./NotFound";

export default function Main() {
  const [asideBar, setAsideBar] = useState(false);

  const { user } = useContext(UserContext);
  const { showData, filterComponents } = useContext(ComponentContext);

  const handleAsideBar = () => {
    setAsideBar(!asideBar);
  };

  return (
    <>
      <button
        type='button'
        onClick={handleAsideBar}
        className='inline-flex items-center md:p-2 md:mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
        </svg>
      </button>

      <aside
        className={`absolute top-3 pr-3 left-2 z-40 w-64 -mt-4 sm:mt-0 transition-transform -translate-x-full md:translate-x-0 ${
          asideBar ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='h-full rounded-md relative px-3 py-4 overflow-y-auto bg-gray-50'>
          <div
            className='flex left-[85%] sm:hidden w-full absolute'
            onClick={handleAsideBar}>
            {" "}
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                clipRule='evenodd'
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
            </svg>
          </div>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                to='/quickguide'
                className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <svg
                  className='w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'>
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span className='ml-3'>Quick Guide</span>
              </Link>
            </li>
            <li>
              <p className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 18'>
                  <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Components
                </span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full'>
                  All Free
                </span>
              </p>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("navbar");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer '>
                  Navbar
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("card");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Card
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("avatar");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Avatar
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("button");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Buttons
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("modal");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Modal
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("sidebar");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Sidebar
                </span>
              </span>
            </li>
            <li>
              <span className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'>
                <span
                  onClick={() => {
                    filterComponents("carousel");
                  }}
                  className='flex-1 ml-3 whitespace-nowrap hover:cursor-pointer'>
                  Carousel
                </span>
              </span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ----------------Routing---------------- */}
      <div className='sm:p-4 m-5 sm:m-0 md:ml-64 min-h-[78lvh] relative '>
        <Routes>
          <Route
            exact
            path='/quickguide'
            element={
              <Suspense
                fallback={
                  <>
                    <div className='flex justify-center items-center w-full min-h-[80lvh]'>
                      <Loader />
                    </div>
                  </>
                }>
                <QuickGuid />
              </Suspense>
            }
          />
          <Route
            path='/'
            element={
              <Suspense
                fallback={
                  <>
                    <div className='flex justify-center items-center w-full min-h-[50lvh]'>
                      <Loader />
                    </div>
                  </>
                }>
                <ShowComponents showData={showData} />
              </Suspense>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* ADDING COMPONENTS: */}
          <Route
            exact
            path='/addcode'
            element={
              user ? (
                <AddComponent />
              ) : (
                <Navigate
                  to={"/login?msg='login first then you can add new component'"}
                />
              )
            }
          />

          {/* Register/Login : Page */}
          <Route
            exact
            path='/register'
            element={
              !user ? (
                <Suspense
                  fallback={
                    <>
                      <div className='flex justify-center items-center w-full min-h-[50lvh]'>
                        <Loader />
                      </div>
                    </>
                  }>
                  <Register />
                </Suspense>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            exact
            path='/login'
            element={
              !user ? (
                <Suspense
                  fallback={
                    <>
                      <div className='flex justify-center items-center w-full min-h-[50lvh]'>
                        <Loader />
                      </div>
                    </>
                  }>
                  <Login />
                </Suspense>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />

          {/* Not Found  */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
