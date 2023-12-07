import { useContext, useState } from "react";
import { UserContext } from "../context/CreateContext";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Register() {
  const { register, loader } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center backdrop-blur-lg z-50'>
      <button
        onClick={() => {
          navigate("/");
        }}
        className='cross-icon absolute top-8 '>
        <p className='circle w-12 absolute -left-[22px] -top-[11px] h-12 rounded-full border-2 -rotate-45'></p>
        <p className='line-1 w-[1px] absolute top-0 h-6 bg-gray-500 -rotate-45'></p>
        <p className='line-2 w-[1px] absolute h-6 bg-gray-500 rotate-45'></p>
      </button>
      <form
        onSubmit={registerHandler}
        className='w-96 mx-auto border-collapse border-2 border-dashed drop-shadow-lg relative p-5'>
        <h2 className='text-2xl text-center pb-5 font-semibold'>Regiter</h2>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900'>
            Your name
          </label>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
            placeholder='abc****'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
          {loader ? (
            <div className='flex space-x-1 justify-center items-center'>
              <p>Processing </p> <Loader />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <div className='option my-3 font-semibold'>OR</div>
      <div className='login-link'>
        <p>
          Aleary have account?{" "}
          <Link to={"/login"} className='text-blue-500 hover:text-blue-700'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
