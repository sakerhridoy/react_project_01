import service1 from '../../assets/Images/service1.png';
import service2 from '../../assets/Images/service2.png';
import service3 from '../../assets/Images/service3.png';
import service4 from '../../assets/Images/service4.png';
import service5 from '../../assets/Images/service5.png';
import service6 from '../../assets/Images/service6.png';
function Service() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <section className="pb-16 md:pb-24 xl:pb-[103px]">
        <div className="container px-4 xl:px-0">
          <div className="w-full md:w-[610px] mx-auto text-center">
            <h2 className="text-[46px] text-[#151515] font-bold font-inter mb-5">
              Our Provided Services
            </h2>
            <p className="text-[#737373] text-base leading-[26px] font-normal font-inter mb-[50px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3 lg:gap-6 ">
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service1} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-10">
                Web Design
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service2} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-10">
                UI/UX Design
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service3} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-10">
                Web Development
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service4} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-9">
                Motion Graphics
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service5} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-10">
                3D Animation
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="pt-20 px-[49px] sm:px-5 md:px-12 xl:px-[49px] pb-[47px] text-center hover:shadow-[0px_0px_5px_4px_rgba(0,0,0,0.25)] rounded-[20px] transition-all duration-300">
              <img src={service6} alt="" className="w-[98.66px] mx-auto" />
              <h3 className="font-inter font-bold text-[25px] text-[#151515] pt-9">
                Digital Marketing
              </h3>
              <p className="text-[#737373] text-base sm:text-[14px] md:text-base xl:text-[17px] leading-[26px] font-normal font-inter mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;
