import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg from '../../assets/Images/banner.jpg';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center after:bg-[#00000040] after:absolute after:inset-0 after:z-10 z-0"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container h-full px-4 xl:px-0.5 2xl:px-0 relative z-20">
          <div className="banner w-full lg:max-w-[950px] mx-auto text-white py-20">
            <Slider {...settings}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="slider-item text-center outline-none">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[75px] font-bold leading-[1.2] font-inter text-white pb-6 md:pb-8 lg:pb-[51px] px-2">
                    We Help brands with high quality services
                  </h1>
                  <p className="pb-8 md:pb-[55px] w-full md:max-w-[621px] mx-auto font-inter font-normal text-base sm:text-lg leading-[26px] text-[#e5e5e5] px-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look.
                  </p>
                  <div className="pb-10">
                    <a
                      href="#contact"
                      className="text-base sm:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-8 sm:px-[42px] py-4 sm:py-[15px] rounded-[10px] hover:bg-[#583dd3] transition-all duration-300 inline-block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
