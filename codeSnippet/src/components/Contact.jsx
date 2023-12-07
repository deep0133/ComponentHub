import { useContext } from "react";
import Loader from "./Loader";
import { UserContext } from "../context/CreateContext";

function Contact() {
  const { loader } = useContext(UserContext);

  return (
    <>
      <div
        className={`relative transform  p-4 border-2 border-dashed rounded-md overflow-y-auto transition duration-200 bg-white`}>
        <h5 className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase'>
          <svg
            className='w-4 h-4 mr-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 16'>
            <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
            <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
          </svg>
          Contact us
        </h5>

        <form className='mb-6'>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@company.com'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Your message
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your message...'></textarea>
          </div>
          <button
            type='submit'
            disabled={loader}
            className='text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block'>
            {loader ? (
              <div className='flex space-x-1 justify-center items-center'>
                <p>Processing</p> <Loader />
              </div>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
