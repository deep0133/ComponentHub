function QuickGuid() {
  return (
    <>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <div className='rounded bg-gray-50 p-3 dark:bg-gray-800'>
            <h2 className='text-lg font-semibold mb-2'># Components</h2>
            <p className='text-lg text-gray-400 dark:text-gray-500'>
              React + Css
            </p>
            <p className='text-lg text-gray-400 dark:text-gray-500'>
              React + Tailwind
            </p>
            <p className='text-lg text-gray-400 dark:text-gray-500'>
              React + Bootstrap
            </p>
          </div>
        </div>
        <div className='mb-4 rounded p-3 bg-gray-50  dark:bg-gray-800'>
          <h2 className='text-lg font-semibold mb-2 '>
            ## React with Plain CSS:
          </h2>
          <p className=' text-gray-600 dark:text-gray-800'>
            Using plain CSS allows you to write custom styles for your
            components. You have complete control over the design, but you need
            to manage CSS files and class names manually.
          </p>
          <h3 className='font-semibold mt-3'>Advantages:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>Full creative control.</li>
            <li>Easy to integrate third-party CSS libraries or frameworks.</li>
          </ul>
          <h3 className='font-semibold mt-3'>Example Components:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>Custom navigation bar.</li>
            <li>Unique styling for buttons.</li>
            <li>Fully customized forms.</li>
          </ul>
        </div>

        <div className='mb-4 rounded p-3 bg-gray-50  dark:bg-gray-800'>
          <h2 className='text-lg font-semibold mb-2 '>
            ## React with Tailwind:
          </h2>
          <p className=' text-gray-600 dark:text-gray-800'>
            {" "}
            Tailwind CSS is a utility-first CSS framework. It offers a set of
            pre-defined utility classes that you can apply directly to your HTML
            elements to style them quickly. You can also extend or customize
            these utilities.
          </p>
          <h3 className='font-semibold mt-3'>Advantages:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>Rapid development with pre-built classes.</li>
            <li>Consistent and maintainable code.</li>
          </ul>
          <h3 className='font-semibold mt-3'>Example Components:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>Responsive grid system.</li>
            <li>Stylish alert messages.</li>
            <li>Easily configurable modals.</li>
          </ul>
        </div>
        <div className='mb-4 rounded p-3 bg-gray-50  dark:bg-gray-800'>
          <h2 className='text-lg font-semibold mb-2 '>
            ## React with Bootstrap:
          </h2>
          <p className=' text-gray-600 dark:text-gray-800'>
            Bootstrap is a popular CSS framework that provides a set of
            pre-designed components and styles. Its widely used for responsive
            and mobile-first design. React-Bootstrap is a popular library that
            allows you to use Bootstrap components in React.
          </p>
          <h3 className='font-semibold mt-3'>Advantages:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>A wide range of pre-built, responsive components.</li>
            <li>Consistency and compatibility across browsers.</li>
          </ul>
          <h3 className='font-semibold mt-3'>Example Components:</h3>
          <ul className='text-gray-600 space-y-2 dark:text-gray-800 list-disc list-inside'>
            <li className='hidden'></li>
            <li>Navigation bar with dropdown menus.</li>
            <li>Modals for displaying content.</li>
            <li>
              Form components like input fields, checkboxes, and radio buttons.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default QuickGuid;
