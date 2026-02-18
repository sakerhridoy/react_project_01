import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import quote from '../../assets/Images/qout.png';
import clint from '../../assets/Images/client.png';
import clint1 from '../../assets/Images/client1.png';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaCircleChevronRight } from "react-icons/fa6";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 2xl:right-[-45px] text-[40px] top-1/2 -translate-y-1/2 text-[#4756DF] cursor-pointer transition-all z-10 hidden md:block"
    >
      <FaCircleChevronRight />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 2xl:left-[-45px] top-1/2 -translate-y-1/2 text-[#4756DF] text-[46px] cursor-pointer transition-all z-10 hidden md:block"
    >
      <IoIosArrowDropleftCircle />
    </div>
  );
};


function Reviews() {
  const settings = {
    focusOnSelect: true,
    centerMode: true,
    arrows: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section id="reviews" className="pb-16 md:pb-24 lg:pb-[227px]">
        <div className="container px-4 xl:px-0.5 2xl:px-0">
          <div className="w-full md:w-[620px] mx-auto text-center mb-9 md:mb-[70px]">
            <h2 className="text-3xl md:text-[46px] text-[#151515] font-bold font-inter mb-5">Some Client Reviews
              </h2>
            <p className="text-[#737373] text-base leading-[26px] font-normal font-inter pb-8 lg:pb-[130px]">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="relative transition-all duration-500">
            <Slider {...settings}>
            <div className="py-8 md:py-[54px] px-6 md:ps-[58px] rounded-[30px] outline-none">
              <img src={quote} alt="" className="w-8 md:w-auto" />
              <p className="font-inter font-normal text-sm md:text-base leading-[26px] pt-5 text-[#7b7b7b]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available.</p>
              <div className="flex pt-6 md:pt-[46px] items-center gap-2">
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              </div>
              <div className="flex gap-4 md:gap-5 items-center pt-6 md:pt-8">
                <div className="clint">
                  <img src={clint} alt="" className="w-10 h-10 md:w-[47px] md:h-[47px] rounded-full"/>
                </div>
                <div className="text">
                  <h4 className="text-[#232323] font-inter font-semibold text-lg md:text-xl">Eric Drake</h4>
                  <p className="text-[#7b7b7b] font-inter font-normal text-sm md:text-base leading-[26px]">Digital Marketor</p>
                </div>
              </div>
            </div>
            <div className="py-8 md:py-[54px] px-6 md:ps-[58px] rounded-[30px] outline-none">
              <img src={quote} alt="" className="w-8 md:w-auto" />
              <p className="font-inter font-normal text-sm md:text-base leading-[26px] pt-5 text-[#7b7b7b]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available.</p>
              <div className="flex pt-6 md:pt-[46px] items-center gap-2">
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              </div>
              <div className="flex gap-4 md:gap-5 items-center pt-6 md:pt-8">
                <div className="clint">
                  <img src={clint1} alt="" className="w-10 h-10 md:w-[47px] md:h-[47px] rounded-full"/>
                </div>
                <div className="text">
                  <h4 className="text-[#232323] font-inter font-semibold text-lg md:text-xl">Sarah Johnson</h4>
                  <p className="text-[#7b7b7b] font-inter font-normal text-sm md:text-base leading-[26px]">UI Developer</p>
                </div>
              </div>
            </div>
            <div className="py-8 md:py-[54px] px-6 md:ps-[58px] rounded-[30px] outline-none">
              <img src={quote} alt="" className="w-8 md:w-auto" />
              <p className="font-inter font-normal text-sm md:text-base leading-[26px] pt-5 text-[#7b7b7b]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available.</p>
              <div className="flex pt-6 md:pt-[46px] items-center gap-2">
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              </div>
              <div className="flex gap-4 md:gap-5 items-center pt-6 md:pt-8">
                <div className="clint">
                  <img src={clint} alt="" className="w-10 h-10 md:w-[47px] md:h-[47px] rounded-full"/>
                </div>
                <div className="text">
                  <h4 className="text-[#232323] font-inter font-semibold text-lg md:text-xl">Eric Drake</h4>
                  <p className="text-[#7b7b7b] font-inter font-normal text-sm md:text-base leading-[26px]">Digital Marketor</p>
                </div>
              </div>
            </div>
            <div className="py-8 md:py-[54px] px-6 md:ps-[58px] rounded-[30px] outline-none">
              <img src={quote} alt="" className="w-8 md:w-auto" />
              <p className="font-inter font-normal text-sm md:text-base leading-[26px] pt-5 text-[#7b7b7b]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available.</p>
              <div className="flex pt-6 md:pt-[46px] items-center gap-2">
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              <FaStar className="text-[#F9BD2C] text-xl md:text-2xl"/>
              </div>
              <div className="flex gap-4 md:gap-5 items-center pt-6 md:pt-8">
                <div className="clint">
                  <img src={clint1} alt="" className="w-10 h-10 md:w-[47px] md:h-[47px] rounded-full"/>
                </div>
                <div className="text">
                  <h4 className="text-[#232323] font-inter font-semibold text-lg md:text-xl">Sarah Johnson</h4>
                  <p className="text-[#7b7b7b] font-inter font-normal text-sm md:text-base leading-[26px]">UI Developer</p>
                </div>
              </div>
              </div>
              </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
export default Reviews;