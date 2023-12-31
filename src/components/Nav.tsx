import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "STRONA GŁÓWNA", link: "/" },
    { name: "SKRYTKI", link: "/" },
    { name: "JAK TO DZIAŁA?", link: "/" },
    { name: "KONTAKT", link: "/" },
    { name: "POMOC", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <p className="text-primary_orange-500 font-medium font-serif text-base uppercase">
            Flores Pracownia
          </p>
        </div>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
           {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? 'top-10 ' : 'top-[-480px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl text-center md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
