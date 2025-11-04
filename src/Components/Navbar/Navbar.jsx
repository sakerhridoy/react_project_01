import React, { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { CgCloseR } from 'react-icons/cg';
import logo from '../../assets/Images/logo.png';
import scrollLogo from '../../assets/Images/footerLogo.png';
function Navbar() {
  const [menuShow, setMenuShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={` top-0 left-0 w-full z-10 transition-all duration-500 ${
          isScroll
            ? 'fixed bg-[#1b2fe050] backdrop-blur-lg shadow-lg py-3'
            : 'absolute pt-6 xl:pt-[57px]'
        }`}
      >
        <div className="container px-4 xl:px-0.5 2xl:px-0">
          <div className="flex md:gap-5 2xl:gap-x-24 3xl:gap-x-[214px] justify-between items-center ">
            <div className="md:w-1/5">
              <a href="#">
                <img src={isScroll ? scrollLogo : logo} alt="logo" />
              </a>
            </div>
            <div className="bar">
              <TiThMenu
                onClick={() => setMenuShow(true)}
                className="text-4xl text-amber-50 md:hidden cursor-pointer"
              />
            </div>
            {/* backdrop-sepia */}
            <div
              className={`mobileMenu flex flex-col bg-[#1b2fe050] text-white  fixed top-0 right-0 p-4 h-full justify-center items-center gap-5 md:hidden ${
                menuShow
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0 overflow-hidden'
              } transition-all duration-900`}
            >
              <div className="close">
                <CgCloseR
                  onClick={() => setMenuShow(false)}
                  className="absolute top-10 right-7 text-white text-4xl md:hidden cursor-pointer"
                />
              </div>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Service</a>
              <a href="">Careers</a>
              <a href="">Contact</a>
            </div>
            <div className="md:w-[564px] lg:w-3/5 hidden md:block">
              <ul className="flex justify-evenly items-center">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/5 hidden md:block text-end">
              <button className="bg-[#4756DF] text-white font-inter md:text-base lg:text-[20px] font-semibold leading-6 md:py-3 lg:py-[15px] md:px-8 lg:px-[42px] rounded-[10px] hover:bg-[#3746C0] transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
