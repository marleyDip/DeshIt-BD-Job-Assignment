import { CirclePlay } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#53389E] h-[1074px] max-w-[1440px] mx-auto">
      <div className="max-padd-container pt-20 h-full">
        <div className="flex flex-col gap-8 pt-16 sm:pt-24 md:pt-32">
          <div className="h-[378px] px-2 sm:px-6 md:px-8 flex flex-col items-start md:items-center gap-6 py-8 md:py-0">
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="md:font-semibold text-base md:text-lg leading-6 md:leading-7 tracking-normal text-left md:text-center text-[#E9D7FE]">
                Super. Simple. Banking.
              </p>

              <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-10 sm:leading-20 md:leading-[90px] tracking-[-0.02em] text-left md:text-center text-white">
                Banking technology that has your back.
              </h1>

              <p className="font-normal text-lg md:text-xl leading-[30px] tracking-normal text-left md:text-center text-[#E9D7FE]">
                Simple, transparent banking. No hidden fees and free overdrafts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-3 w-full sm:justify-start md:justify-center">
              {/* Demo Button */}
              <button className="w-full sm:w-[143px] h-[60px] px-7 py-4 rounded-lg border border-[#D0D5DD] shadow-[0_1px_2px_0_#1018280D] flex items-center justify-center gap-3 opacity-100 bg-white">
                <CirclePlay size={24} className="text-gray-700" />
                <p className=" font-semibold text-lg leading-[28px] tracking-normal text-gray-700">
                  Demo
                </p>
              </button>

              {/* Sign Up Button */}
              <button className="w-full sm:w-[130px] h-[60px] px-7 py-4 rounded-lg border border-[#7F56D9] shadow-[0_1px_2px_0_#1018280D] flex items-center justify-center opacity-100 bg-[#7F56D9]">
                <p className="font-semibold text-lg leading-[28px] tracking-normal text-white">
                  Sign up
                </p>
              </button>
            </div>
          </div>

          <div className="h-[456px] px-8">Home</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
