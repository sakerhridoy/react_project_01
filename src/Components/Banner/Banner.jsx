import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
 var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
 };

  return (
    <>
      <section className=" relative bg-[url(../src/assets/Images/banner.jpg)] bg-cover bg-center h-screen after:bg-[#00000020] after:absolute after:inset-0 after:z-10 z-0">
        <div className="container h-full px-4 xl:px-0">
          <div className="banner w-full lg:max-w-[950px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
            <Slider {...settings}>
              <div className="slider-item text-center mb-4 xl:pt-20 2xl:pt-0">
                <h1 className="text-4xl md:text-6xl sm:px-14 md:px-10 lg:px-16 xl:px-0 lg:text-[75px] font-bold leading-[120%] font-inter text-white pb-6 md:pb-8 lg:pb-[51px]">
                  We Help brands with high quality services
                </h1>
                <p className="pb-6 md:pb-[55px] px-5 w-full md:max-w-[621px] mx-auto font-inter font-normal text-[16px] leading-[26px] text-white sm:px-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but themajority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <a
                  href=""
                  className="text-base md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-8 md:px-[42px] py-3 md:py-[15px] rounded-[10px]"
                >
                  Get Started
                </a>
              </div>
              <div className="slider-item text-center mb-4 xl:pt-20 2xl:pt-0">
                <h1 className="text-4xl md:text-6xl sm:px-14 md:px-10 xl:px-0 lg:text-[75px] font-bold leading-[120%] font-inter text-white pb-6 md:pb-8 lg:pb-[51px]">
                  We Help brands with high quality services
                </h1>
                <p className="pb-6 md:pb-[55px] px-5 w-full md:max-w-[621px] mx-auto font-inter font-normal text-[16px] leading-[26px] text-white sm:px-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but themajority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <a
                  href=""
                  className="text-base md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-8 md:px-[42px] py-3 md:py-[15px] rounded-[10px]"
                >
                  Get Started
                </a>
              </div>
              <div className="slider-item text-center mb-4 xl:pt-20 2xl:pt-0">
                <h1 className="text-4xl md:text-6xl sm:px-14 md:px-10 xl:px-0 lg:text-[75px] font-bold leading-[120%] font-inter text-white pb-6 md:pb-8 lg:pb-[51px]">
                  We Help brands with high quality services
                </h1>
                <p className="pb-6 md:pb-[55px] px-5 w-full md:max-w-[621px] mx-auto font-inter font-normal text-[16px] leading-[26px] text-white sm:px-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but themajority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <a
                  href=""
                  className="text-base md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-8 md:px-[42px] py-3 md:py-[15px] rounded-[10px]"
                >
                  Get Started
                </a>
              </div>
              <div className="slider-item text-center mb-4 xl:pt-20 2xl:pt-0">
                <h1 className="text-4xl md:text-6xl sm:px-14 md:px-10 xl:px-0 lg:text-[75px] font-bold leading-[120%] font-inter text-white pb-6 md:pb-8 lg:pb-[51px]">
                  We Help brands with high quality services
                </h1>
                <p className="pb-6 md:pb-[55px] px-5 w-full md:max-w-[621px] mx-auto font-inter font-normal text-[16px] leading-[26px] text-white sm:px-10">
                  There are many variations of passages of Lorem Ipsum
                  available, but themajority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
                <a
                  href=""
                  className="text-base md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-8 md:px-[42px] py-3 md:py-[15px] rounded-[10px]"
                >
                  Get Started
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
