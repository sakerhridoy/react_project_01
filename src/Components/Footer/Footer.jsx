import footerLogo from '../../assets/Images/footerLogo.png';
function Footer() {
  return (
    <footer>
      <div className="container px-4 xl:px-0">
        <div className="md:flex md:gap-4 xl:gap-[131px] pb-[50px]">
          <div className="w-full md:w-2/6 pb-5 md:pb-0">
            <img src={footerLogo} alt="" />
            <p className="font-inter font-normal leading-[26px] text-base md:text-[15px] lg:text-base text-[#7b7b7b] pt-[30px] pr-0 md:pr-5 lg:pr-10 xl:pr-0">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
          </div>
          <div className="w-full md:w-4/6 pt-9 md:pt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 xl:gap-[106px] gap-y-7 md:gap-y-0">
              <div className="item">
                <h4 className="font-inter font-semibold text-xl md:text-lg lg:text-xl text-[#151515] pb-3">
                  About
                </h4>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">About Us</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Features</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">News</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Careers</a>
                </p>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl md:text-lg lg:text-xl text-[#151515] pb-3">
                  Company
                </h4>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Our Team</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Partner With Us</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">FAQ</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Blog</a>
                </p>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl md:text-lg lg:text-xl text-[#151515] pb-3">
                  Support
                </h4>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">About</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Support Center</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Feedback</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Contact Us</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base md:text-[15px] lg:text-base text-[#7b7b7b]">
                  <a href="">Accesbility</a>
                </p>
              </div>
              <div className="item">
                <h4 className="font-inter font-semibold text-xl md:text-lg lg:text-xl text-[#151515] pb-3">
                  Get in touch
                </h4>
                <p className="leading-10 font-inter font-normal text-base text-[#7b7b7b]">
                  <a href="">info@gmail.com</a>
                </p>
                <p className="leading-10 font-inter font-normal text-base text-[#7b7b7b]">
                  <a href="">+88 0121 0212</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-t-[#E8E8E8] px-4 xl:px-0">
        <div className="py-6 xl:py-[33px]">
          <p className="font-inter font-normal text-base text-center text-[#CCCCCC]">
            All credit goes to @agence.com
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;