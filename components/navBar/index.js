import { SiLinkedin, SiGithub } from 'react-icons/si';

const NavBar = () => {
  return (
    <>
        <div className="flex flex-wrap py-4 px-8 bg-yellow-400">
          <div className="w-full md:w-1/3">
            <p className="md:grid-cols-2 text-xl">Logo</p>
          </div>

          <div className="w-full md:w-1/3">
            <ul className="md:grid-cols-8 flex justify-center space-x-4 text-xl">
              <li className="transform hover:scale-110 motion-reduce:transform-none md:no-underline md:hover:underline">
                About
              </li>
              <li className="transform hover:scale-110 motion-reduce:transform-none md:no-underline md:hover:underline">
                Work
              </li>
              <li className="transform hover:scale-110 motion-reduce:transform-none md:no-underline md:hover:underline">
                Contact
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 flex justify-end items-center space-x-4 transform">
            <a
              href="https://www.linkedin.com/in/jose-bautista-a323b6217/"
              className="flex justify-center transform scale-150 hover:bg-blue-100 "
              target="_blank"
            >
              <SiLinkedin></SiLinkedin>
            </a>

            <a
              href="https://github.com/Josebautista10"
              className="flex justify-center transform scale-150 "
              target="_blank"
            >
              <SiGithub></SiGithub>
            </a>
          </div>
        </div>
    </>
  );
};

export default NavBar;
