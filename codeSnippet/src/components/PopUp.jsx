import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/CreateContext";
import Loader from "./Loader";

function PopUp() {
  const { popUp, setPopUp, user, loader, updateProfile } =
    useContext(UserContext);

  const [updatedData, setUpdatedData] = useState({
    name: user && user.name,
    email: user && user.email,
    password: "",
  });

  useEffect(() => {
    if (user) {
      setUpdatedData({
        name: user.name,
        email: user.email,
        password: "",
      });
    }
  }, [user]);

  const onChangeHandler = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateProfile(updatedData);
  };

  return (
    popUp && (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white min-w-[30rem] p-8 rounded-md space-y-3'>
          <div className='flex justify-between items-center flex-col'>
            <div className='flex justify-between w-full'>
              <h2 className='text-xl font-bold mb-4'>Update Profile</h2>
              <button
                onClick={() => setPopUp(false)}
                className='px-2 -mt-5 hover:cursor-pointer'>
                Close
              </button>
            </div>

            <form onSubmit={updateHandler} className='w-full'>
              <div className='mb-5'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  value={updatedData.name}
                  onChange={onChangeHandler}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Enter name...'
                  required
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  value={updatedData.email}
                  onChange={onChangeHandler}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='name@flowbite.com'
                  required
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'>
                  Your password
                </label>
                <input
                  type='password'
                  name='password'
                  value={updatedData.password}
                  onChange={onChangeHandler}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  required
                  placeholder='abc****'
                />
              </div>
              <button
                className='submit w-full py-2 rounded-md outline-none border text-white  bg-green-600 hover:bg-green-800'
                type='submit'>
                {loader ? (
                  <div className='flex space-x-1 justify-center items-center'>
                    <p>Processing </p> <Loader />
                  </div>
                ) : (
                  "Update Profile"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default PopUp;
