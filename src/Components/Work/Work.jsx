import work1 from '../../assets/Images/work1.jpg';
import work2 from '../../assets/Images/work2.png';
import work3 from '../../assets/Images/work3.png';
import work4 from '../../assets/Images/work4.png';
import work5 from '../../assets/Images/work5.png';
import work6 from '../../assets/Images/work6.png';
function Work() {
  return (
    <>
      <section id='work' className="py-16 md:py-20 xl:py-[150px] bg-[#F3F3F3] mb-16 md:mb-24 xl:mb-[150px]">
        <div className="container px-4 xl:px-0.5 2xl:px-0">
          <div className="w-full md:w-[620px] mx-auto text-center mb-8 md:mb-[70px]">
            <h2 className="text-[46px] text-[#151515] font-bold font-inter mb-5">
              Our Recent Works
            </h2>
            <p className="text-[#737373] text-base leading-[26px] font-normal font-inter pb-16 xl:pb-[106px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work1} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                Task Management App
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work2} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                Saas Landing Page Design
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work3} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                App Design
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work4} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                Landing Page Design
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work5} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                Dashboard Design
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
            <div className="group bg-white text-center rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={work6} alt="" className="w-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6A4DF4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-8">
                Web App Design
              </h4>
              <p className="text-[#737373] text-base font-inter leading-[26px] font-normal pt-3 pb-8 px-6 md:px-10 lg:px-8 xl:px-12">
                This is a task management application that can help you be more productive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
