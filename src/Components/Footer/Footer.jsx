import footerLogo from '../../assets/Images/footerLogo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="pt-20">
      <div className="container px-4 xl:px-0.5 2xl:px-0">
        <div className="md:flex md:gap-10 lg:gap-20 xl:gap-[131px] pb-[50px]">
          <div className="w-full md:w-1/3 pb-10 md:pb-0">
            <img src={footerLogo} alt="Logo" className="mb-8" />
            <p className="font-inter font-normal leading-[26px] text-base text-[#7b7b7b] pr-0 md:pr-4 lg:pr-10">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature. There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#F4F4FF] flex items-center justify-center text-[#6A4DF4] hover:bg-[#6A4DF4] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
              <div className="item">
                <h4 className="font-inter font-semibold text-xl text-[#151515] pb-6">
                  About
                </h4>
                <ul className="space-y-4">
                  {['About Us', 'Features', 'News', 'Careers'].map((link) => (
                    <li key={link}>
                      <a href="#" className="font-inter font-normal text-base text-[#7b7b7b] hover:text-[#6A4DF4] transition-all duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl text-[#151515] pb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  {['Our Team', 'Partner With Us', 'FAQ', 'Blog'].map((link) => (
                    <li key={link}>
                      <a href="#" className="font-inter font-normal text-base text-[#7b7b7b] hover:text-[#6A4DF4] transition-all duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl text-[#151515] pb-6">
                  Support
                </h4>
                <ul className="space-y-4">
                  {['About', 'Support Center', 'Feedback', 'Contact Us'].map((link) => (
                    <li key={link}>
                      <a href="#" className="font-inter font-normal text-base text-[#7b7b7b] hover:text-[#6A4DF4] transition-all duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl text-[#151515] pb-6">
                  Get in touch
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:info@gmail.com" className="font-inter font-normal text-base text-[#7b7b7b] hover:text-[#6A4DF4] transition-all duration-300">
                      info@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+8801210212" className="font-inter font-normal text-base text-[#7b7b7b] hover:text-[#6A4DF4] transition-all duration-300">
                      +88 0121 0212
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-[#E8E8E8] px-4 xl:px-0.5 2xl:px-0">
        <div className="py-8">
          <p className="font-inter font-normal text-base text-center text-[#ababab]">
            &copy; {new Date().getFullYear()} Agence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;