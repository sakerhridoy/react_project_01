import ScrollSpy from 'react-scrollspy-navigation';
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
      <ScrollSpy activeClass="nav-active">
        <nav
          className={` top-0 left-0 w-full z-10 transition-all duration-500 ${
            isScroll
              ? 'fixed bg-[#1b2fe050] backdrop-blur-lg shadow-lg py-3'
              : 'absolute pt-6 '
          }`}
        >
          <div className="container px-4 xl:px-0.5 2xl:px-0">
            <div className="flex justify-between items-center gap-4 lg:gap-8">
              <div className="shrink-0">
                <a href="#home">
                  <img src={isScroll ? scrollLogo : logo} alt="logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain" />
                </a>
              </div>
              <div className="bar md:hidden">
                <TiThMenu
                  onClick={() => setMenuShow(true)}
                  className="text-4xl text-white cursor-pointer"
                />
              </div>
              {/* backdrop-sepia */}
              <div
                className={`mobileMenu flex flex-col bg-[#1b2fe0f2] backdrop-blur-2xl text-white fixed top-0 right-0 h-full justify-center items-center gap-8 md:hidden shadow-2xl z-[100] transition-all duration-500 ease-in-out ${
                  menuShow
                    ? 'w-full sm:w-[300px] opacity-100 translate-x-0'
                    : 'w-0 opacity-0 translate-x-full overflow-hidden'
                }`}
              >
                <div className="close">
                  <CgCloseR
                    onClick={() => setMenuShow(false)}
                    className="absolute top-10 right-7 text-white text-4xl cursor-pointer hover:rotate-90 transition-all duration-300"
                  />
                </div>
                {['home', 'about', 'why', 'service', 'reviews', 'success', 'work', 'contact'].map((item) => (
                  <a key={item} href={`#${item}`} onClick={() => setMenuShow(false)} className="capitalize font-inter text-xl font-semibold hover:text-[#FFD700] transition-colors">
                    {item === 'why' ? 'Why Us' : item === 'success' ? 'Success Story' : item}
                  </a>
                ))}
              </div>
              <div className="hidden md:block flex-grow">
                <ul className="flex justify-center lg:justify-end items-center gap-4 lg:gap-6 xl:gap-8">
                  <li><a href="#home" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">Home</a></li>
                  <li><a href="#about" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">About</a></li>
                  <li><a href="#why" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">Why Us</a></li>
                  <li><a href="#service" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">Service</a></li>
                  <li><a href="#reviews" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">Reviews</a></li>
                  <li><a href="#success" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium whitespace-nowrap">Success</a></li>
                  <li><a href="#work" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base font-medium">Work</a></li>
                </ul>
              </div>
              <div className="hidden lg:block shrink-0">
                <button className="bg-[#4756DF] text-white font-inter text-base font-semibold py-3 px-8 rounded-[10px] hover:bg-white hover:text-[#4756DF] border border-transparent hover:border-[#4756DF] transition-all duration-300 shadow-md">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>
      </ScrollSpy>
    </>
  );
}

export default Navbar;
