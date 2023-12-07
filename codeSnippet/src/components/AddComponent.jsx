import { useContext, useState } from "react";
import { ComponentContext } from "../context/CreateContext";
import Loader from "./Loader";

function AddComponent() {
  const [codeData, setCodeData] = useState({
    language: "",
    title: "",
    codeSnippet: "",
  });

  const { addComponent, loader } = useContext(ComponentContext);

  const changeHandler = (e) => {
    setCodeData({ ...codeData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    addComponent(codeData.title, codeData.language, codeData.codeSnippet);
  };

  return (
    <div className='add-component border-2 border-gray-300 border-dashed px-5'>
      <h2 className='text-lg font-semibold py-5 pr-5'>Add Component</h2>
      <div className='form '>
        <form className='mb-6' onSubmit={submitHandler}>
          <div className='mb-6'>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Name Of Component
            </label>
            <input
              type='text'
              name='title'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Title'
              onChange={changeHandler}
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='tech'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Languages
            </label>
            <input
              type='text'
              name='language'
              onChange={changeHandler}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Language used in component'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='code'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your Code
            </label>
            <textarea
              rows='4'
              name='codeSnippet'
              onChange={changeHandler}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Your code...'></textarea>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block'>
            {loader ? (
              <div className='flex space-x-1 justify-center items-center'>
                <p>Processing </p> <Loader />
              </div>
            ) : (
              "Add Code"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddComponent;
