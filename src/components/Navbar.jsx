// import { useState } from 'react';

import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="  w-full flex py-2 justify-between items-center navbar">
      <a href="https://atdigital.io/" target="_blank" rel="noreferrer">
        <img src={logo} alt="logo" className="w-[184px] h-[72px]" />
      </a>
      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer hover:text-secondaryColor text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white `}
          >
            <a href={`${nav.link}`} target="_blank" rel="noreferrer">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* For mobile response  */}
      <div className=" sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'}
        p-6 bg-primaryColor absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondaryColor ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white `}
              >
                <a href={`${nav.link}`} target="_blank" rel="noreferrer">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
