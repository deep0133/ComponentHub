import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ComponentContext, UserContext } from "../context/CreateContext";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");
  const [searchedText, setSearchedText] = useState("");

  const { user, logout, setPopUp } = useContext(UserContext);
  const { filterComponents } = useContext(ComponentContext);

  const showProfile = () => {
    setOpacity((pre) => {
      if (pre === "opacity-100") {
        return "opacity-0";
      }
      return "opacity-100";
    });
  };

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (searchedText) {
      filterComponents(searchedText);
    } else {
      filterComponents("all");
    }
  }, [searchedText]);

  return (
    <>
      <nav className='bg-white border-gray-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/' className='flex items-center'>
            {/* <img className='h-8 mr-3' src='' alt='Title' /> */}
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>
              ComponentHub
            </span>
          </Link>
          <button
            type='button'
            onClick={() => {
              setMenu(!menu);
            }}
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>

          <div className='input relative hidden lg:block w-[30%]'>
            <input
              type='search'
              value={searchedText}
              onChange={(e) => setSearchedText(e.target.value)}
              placeholder='Search component by name'
              className='outline-none border rounded-md py-2 px-3 w-full'
            />
            <span className='absolute top-2 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='gray'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </span>
          </div>

          <div className={`${menu ? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white'>
              <li className='w-fit mx-auto'>
                <Link
                  to='/'
                  onClick={() => filterComponents("all")}
                  className='block py-2 pl-3 pr-4 rounded md:bg-transparent hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0'
                  aria-current='page'>
                  Home
                </Link>
              </li>
              <li className='w-fit mx-auto'>
                <Link
                  to='/about'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0'>
                  About
                </Link>
              </li>
              <li className='w-fit mx-auto'>
                <Link
                  to='/contact'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0'>
                  Contact
                </Link>
              </li>
              {user ? (
                <>
                  <li className='w-fit mx-auto'>
                    <Link
                      to='/addcode'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0'>
                      Add Code
                    </Link>
                  </li>{" "}
                  <li className='relative w-fit ml-[95%]'>
                    <button className='show-profile' onClick={showProfile}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </button>

                    <div
                      className={`z-10 absolute ${opacity} top-12 right-0 inline-block w-64 text-sm 
                    text-gray-500 transition-opacity duration-300 bg-white 
                    border border-gray-200 rounded-lg shadow-sm
                    `}>
                      <div className='p-3'>
                        <div className='flex items-center justify-between mb-2'>
                          <img
                            className='w-10 h-10 rounded-full'
                            src='../src/assets/profile.svg'
                            alt='profile_pic'
                          />
                          <div className='space-x-2'>
                            <button
                              type='button'
                              onClick={() => {
                                setPopUp(true);
                              }}
                              className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-xs px-3 py-1.5 focus:outline-none'>
                              Update
                            </button>
                            <button
                              type='button'
                              onClick={logoutHandler}
                              className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs px-3 py-1.5 focus:outline-none'>
                              logout
                            </button>
                          </div>
                        </div>
                        <div className='text-base font-semibold leading-none text-gray-900'>
                          <p>{user.name}</p>
                        </div>
                        <div className='mb-3 text-sm font-normal'>
                          <p className='hover:underline'>{user.email}</p>
                        </div>
                        <div className='mb-4 text-sm'>
                          Open-source contributor. Building flowbite.com .
                        </div>
                        <ul className='flex text-sm'>
                          <li className='me-2'>
                            <p className=''>
                              <span className='font-semibold text-gray-900'>
                                {user.noOfComponent}
                              </span>
                              <span> Components added</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <li className='w-fit mx-auto'>
                  <Link
                    to={"/login"}
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0'>
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
