function Form () {
  return (
    <>
      <section className="bg-[#F3F3F3] mb-16 md:mb-24 xl:mb-[150px]">
        <div className="container px-4 xl:px-0.5 2xl:px-0 py-16 md:py-24 xl:py-[150px]">
          <div className="lg:flex xl:gap-[146px] items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-inter font-bold text-4xl md:text-[46px] text-[#151515] pb-5 md:pe-[106px]">
                We Do design, Code & Development
              </h2>
              <p className="font-inter font-normal text-base text-[#7b7b7b] pb-2.5 leading-[26px] pe-[60px]">
                I had a good experience while using this app, what fascinated me
                was the live tracking feature There are many variations of
                passages of Lorem Ipsum available, but the majority.
              </p>
              <p className="font-inter font-normal text-base text-[#7b7b7b] leading-[26px]">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form.
              </p>
            </div>
            <div className="w-full lg:w-1/2 pt-11 lg:pt-0">
              <div className="py-8 xl:py-[61px] px-8 xl:px-[43px] bg-white rounded-[10px]">
                <h3 className="font-inter font-bold text-3xl text-center pb-[30px]">
                  Get a free quote now
                </h3>
                <form action="" method="post">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className="font-inter font-semibold text-base text-[#151515] mb-2.5 block"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full mb-5 px-5 py-4 rounded-[10px] border border-[#D0D0D0] outline-0"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className="font-inter font-semibold text-base text-[#151515] mb-2.5 block"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full mb-5 px-5 py-4 rounded-[10px] border border-[#D0D0D0] outline-0"
                    />
                  </div>
                  <div className="mb-12">
                    <label
                      htmlFor=""
                      className="font-inter font-semibold text-base text-[#151515] mb-2.5 block"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full mb-5 px-5 py-4 rounded-[10px] border border-[#D0D0D0] outline-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white font-inter font-semibold text-[20px] leading-[26px] bg-[#6A4DF4] py-[15px] rounded-[10px] w-full"
                  >
                    Get Pricing Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Form;