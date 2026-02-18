import React from 'react';
import CountUp from 'react-countup';

function Success() {
  //  window.addEventListener('load', () => {
  //    const customer = document.getElementById('customer');
  //    let count = 0;
  //    const limit = 200;

  //    const counter = setInterval(() => {
  //      count += 10;
  //      customer.innerText = count + '+';
  //      if (count >= limit) {
  //        clearInterval(counter);
  //      }
  //    }, 100);
  //  });
  return (
    <>
      <section id='success' className="pt-16 md:pt-24 xl:pt-[171px] pb-16 md:pb-24 xl:pb-[149px]">
        <div className="container bg-[#E0FFF9] py-10 md:py-[86px] px-6 sm:px-10 lg:px-20 rounded-[20px]">
          <div className="md:flex md:gap-11 xl:gap-[124px]">
            <div className="md:w-2/6">
              <h4 className="font-inter font-medium text-2xl text-[#6A4DF4]">
                Our Success
              </h4>
              <h3 className="font-inter font-semibold text-[27px] md:text-[28px] xl:text-4xl text-[#151515] pt-4">
                West cost Brand makers-Global Edge
              </h3>
            </div>
            <div className="w-full md:w-4/6 grid grid-cols-2 sm:flex sm:justify-between gap-6 md:gap-0">
              <div className="pt-6 md:pt-0">
                <h2
                  id="customer"
                  className="font-inter font-bold text-3xl sm:text-4xl md:text-[50px] text-[#151515]"
                >
                  <CountUp end={200} duration={3.5} />+
                </h2>
                <p className="font-inter font-medium text-[#737373] text-sm sm:text-base md:text-[20px] pt-2 sm:pt-5">
                  Customer Satisfied
                </p>
              </div>
              <div className="pt-6 md:pt-0">
                <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-[50px] text-[#151515]">
                  <CountUp end={4.5} duration={2.5} decimals={1} />
                </h2>
                <p className="font-inter font-medium text-[#737373] text-sm sm:text-base md:text-[20px] pt-2 sm:pt-5">
                  Avg rating
                </p>
              </div>
              <div className="pt-6 md:pt-0 col-span-2 sm:col-span-1 text-center sm:text-left">
                <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-[50px] text-[#151515]">
                  <CountUp end={351} duration={2.5} />+
                </h2>
                <p className="font-inter font-medium text-[#737373] text-sm sm:text-base md:text-[20px] pt-2 sm:pt-5">
                  Project Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Success;
