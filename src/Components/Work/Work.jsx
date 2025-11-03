import work1 from '../../assets/Images/work1.jpg';
import work2 from '../../assets/Images/work2.png';
import work3 from '../../assets/Images/work3.png';
import work4 from '../../assets/Images/work4.png';
import work5 from '../../assets/Images/work5.png';
import work6 from '../../assets/Images/work6.png';
function Work() {
  return (
    <>
      <section className="py-16 md:py-20 xl:py-[150px] bg-[#F3F3F3] mb-16 md:mb-24 xl:mb-[150px]">
        <div className="container px-4 xl:px-0">
          <div className="w-full md:w-[620px] mx-auto text-center mb-8 md:mb-[70px]">
            <h2 className="text-[46px] text-[#151515] font-bold font-inter mb-5">
              Our Recent Works
            </h2>
            <p className="text-[#737373] text-base leading-[26px] font-normal font-inter pb-16 xl:pb-[106px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-white text-center rounded-[20px]">
              <img src={work1} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                Task Management App
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
            <div className="bg-white text-center rounded-[20px]">
              <img src={work2} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                Saas Landing Page Design
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
            <div className="bg-white text-center rounded-[20px]">
              <img src={work3} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                App Design
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
            <div className="bg-white text-center rounded-[20px]">
              <img src={work4} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                Landing Page Design
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
            <div className="bg-white text-center rounded-[20px]">
              <img src={work5} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                Dashboard Design
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
            <div className="bg-white text-center rounded-[20px]">
              <img src={work6} alt="" className="w-full rounded-[20px]" />
              <h4 className="text-[#151515] text-xl font-inter font-bold pt-[30px]">
                Web App Design
              </h4>
              <p className="text-[#737373] text-base font-inter  leading-[26px] font-normal pt-2.5 pb-[30px] px-[42px] md:px-14 lg:px-[42px]">
                This is a task management application that can help you be more{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
