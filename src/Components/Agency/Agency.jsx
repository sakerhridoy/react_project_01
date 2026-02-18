import agency1 from '../../assets/Images/agency1.png';
import agency2 from '../../assets/Images/agency2.png';
import agency from '../../assets/Images/agancy.jpg';
function Agency() {
  return (
    <>
      <section id='about' className="pt-16 2xl:pt-[150px] pb-16 2xl:pb-[106px]">
        <div className="container px-4 xl:px-0">
          <div className="w-full md:w-[620px] xl:w-[802px] mx-auto text-center mb-9 md:mb-[70px]">
            <h2 className="text-3xl md:text-[46px] text-[#151515] font-bold font-inter mb-5 max-w-[600px] mx-auto">
              Why You Should Choose Agency
            </h2>
            <p className="text-[#737373] text-base leading-[26px] font-normal font-inter pb-16 xl:pb-[137px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="lg:flex xl:gap-[70px] justify-center items-center">
            <div className="w-full lg:w-[869px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-24 lg:gap-x-0 gap-y-8 lg:gap-y-[95px]">
                <div className="text-center md:text-left">
                  <img src={agency1} alt="" className="block mx-auto md:mx-0" />
                  <h5 className="font-inter font-bold text-lg md:text-[25px] leading-[26px] text-[#151515] pt-5">
                    Innovative Ideas
                  </h5>
                  <p className="font-inter font-normal text-base leading-[26px] text-[#737373] pt-2.5 pr-0 md:pr-[20px] lg:pr-[120px]">
                    Because each project is different, we adapt to your business
                    model.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <img src={agency2} alt="" className="block mx-auto md:mx-0" />
                  <h5 className="font-inter font-bold text-lg md:text-[25px] leading-[26px] text-[#151515] pt-5">
                    Professional Team
                  </h5>
                  <p className="font-inter font-normal text-base leading-[26px] text-[#737373] pt-2.5 pr-0 md:pr-[20px] lg:pr-[120px]">
                    Our experts are dedicated to delivering high-quality results for your brand.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <img src={agency1} alt="" className="block mx-auto md:mx-0" />
                  <h5 className="font-inter font-bold text-lg md:text-[25px] leading-[26px] text-[#151515] pt-5">
                    Strategic Planning
                  </h5>
                  <p className="font-inter font-normal text-[14px] md:text-base leading-[26px] text-[#737373] pt-2.5 md:pr-[20px] lg:pr-[120px]">
                    We develop comprehensive strategies to ensure your project's success.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <img src={agency2} alt="" className="block mx-auto md:mx-0" />
                  <h5 className="font-inter font-bold text-lg md:text-[25px] leading-[26px] text-[#151515] pt-5">
                    Dedicated Support
                  </h5>
                  <p className="font-inter font-normal text-[14px] md:text-base leading-[26px] text-[#737373] pt-2.5 md:pr-[20px] lg:pr-[120px]">
                    We provide 24/7 support for all our clients and serve them
                    professionally.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-10 lg:mt-0 lg:w-[428px] ">
              <img
                src={agency}
                alt=""
                className="w-full h-full rounded-2xl lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Agency;
