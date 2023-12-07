export default function Footer() {
  return (
    <div className='py-3 border mb-0 flex justify-center items-center bg-gray-100 '>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2023{" "}
        <a href='/' className='hover:underline'>
          componentHub
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}
