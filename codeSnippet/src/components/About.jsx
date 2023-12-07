export default function About() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>About Us</h1>
      <h3 className='text-lg my-3'> Welcome to componentHub</h3>
      <div className='content'>
        <div className='mission'>
          <p className='mb-3'>
            At{" "}
            <a href='' className='text-blue-600 font-medium'>
              ComponentHub
            </a>
            ,Our mission is to provide a platform where users can store their
            components, and users can also view other components. All components
            are built using React Bootstrap and React Tailwind CSS.
          </p>

          <h2 className='text-lg mt-3 mb-1'>## What Sets Us Apart </h2>
          <ul className='apart space-y-1'>
            <li>
              Innovation: We strive to bring innovative solutions to web dev.
            </li>
            <li>
              User-Centric Design: Our products are designed with the user in
              mind, ensuring a seamless and enjoyable experience.
            </li>
            <li>
              Community Engagement: We believe in fostering a strong community
              and welcome your feedback to continually improve our services.
            </li>
          </ul>

          <h2 className='text-lg mt-3 mb-1'>## Get Involved </h2>
          <p>
            We welcome you to contribute to this project. If you want to
            contribute, please check the repository on{" "}
            <a
              href='https://github.com'
              rel='noreferrer'
              className='text-blue-600'
              target='_blank'>
              GitHub
            </a>
          </p>

          <h2 className='text-lg mt-3 mb-1'>## Contact Us </h2>
          <p className='mb-3'>
            Have questions or suggestions? Feel free to reach out to us at{" "}
            <a
              href='mailto:deepanshuheer@zohomail.in'
              className='text-blue-600'>
              deepanshuheer@zohomail.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
