import { CirclePlay } from "lucide-react";
import GlassCard from "./GlassCard";

const cards = [
  { name: "Olivia Rhye", number: "1234 1234 1234 1234", expiry: "06/24" },
  { name: "Lana Steiner", number: "1234 1234 1234 1234", expiry: "06/24" },
  { name: "Demi Wilkinson", number: "1234 1234 1234 1234", expiry: "06/24" },
  { name: "Candice Wu", number: "1234 1234 1234 1234", expiry: "06/24" },
  { name: "Phoebe Howard", number: "1234 1234 1234 1234", expiry: "06/24" },
];

const Hero = () => {
  return (
    <section className="bg-[#53389E] h-[1074px] max-w-[1440px] mx-auto">
      <div className="max-padd-container pt-20 h-full">
        <div className="flex flex-col gap-8 pt-16 sm:pt-24 md:pt-32">
          {/* top - info */}
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
              <button className="w-full sm:w-[143px] h-[60px] px-7 py-4 rounded-lg border border-[#D0D5DD] shadow-[0_1px_2px_0_#1018280D] flex items-center justify-center gap-3 opacity-100 bg-white cursor-pointer">
                <CirclePlay size={24} className="text-gray-700" />
                <p className=" font-semibold text-lg leading-[28px] tracking-normal text-gray-700">
                  Demo
                </p>
              </button>

              {/* Sign Up Button */}
              <button className="w-full sm:w-[130px] h-[60px] px-7 py-4 rounded-lg border border-[#7F56D9] shadow-[0_1px_2px_0_#1018280D] flex items-center justify-center opacity-100 bg-[#7F56D9] cursor-pointer">
                <p className="font-semibold text-lg leading-[28px] tracking-normal text-white">
                  Sign up
                </p>
              </button>
            </div>
          </div>

          {/* bottom - card */}
          <div className="flex items-center justify-center h-[456px] overflow-hidden  relative">
            <div className="absolute -rotate-[65deg] top-1/2 right-[62%] -translate-y-[1%]">
              <GlassCard>
                <div className="flex flex-col items-center h-full text-center">
                  <h5 className="rotate-90 absolute top-20 right-1 font-semibold text-[28.35px] leading-[100%] tracking-[0em] text-gray-800 dark:text-white">
                    Untitled.
                  </h5>

                  <h2 className="rotate-90 absolute top-24 left-3 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em] uppercase text-white">
                    Phoenix Baker
                  </h2>

                  <p className="rotate-90 absolute bottom-54 right-52 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em]">
                    06/24
                  </p>

                  <p className="rotate-90 absolute top-46 -left-32 font-[Manrope] font-semibold text-[28.35px] leading-[100%] tracking-[0.15em] text-white">
                    1234 1234 1234 1234
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="absolute -rotate-[33deg] top-1/2 right-[52%] -translate-y-[30%]">
              <GlassCard>
                <div className="flex flex-col items-center h-full text-center">
                  <h5 className="rotate-90 absolute top-20 right-1 font-semibold text-[28.35px] leading-[100%] tracking-[0em] text-gray-800 dark:text-white">
                    Untitled.
                  </h5>

                  <h2 className="rotate-90 absolute top-22 left-3 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em] uppercase text-white">
                    OLIVIA RHYE
                  </h2>

                  <p className="rotate-90 absolute bottom-54 right-52 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em]">
                    06/24
                  </p>

                  <p className="rotate-90 absolute top-46 -left-32 font-[Manrope] font-semibold text-[28.35px] leading-[100%] tracking-[0.15em] text-white">
                    1234 1234 1234 1234
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[40%]">
              <GlassCard>
                <div className="flex flex-col items-center h-full text-center">
                  <h5 className="rotate-90 absolute top-20 right-1 font-semibold text-[28.35px] leading-[100%] tracking-[0em] text-gray-800 dark:text-white">
                    Untitled.
                  </h5>

                  <h2 className="rotate-90 absolute top-24 left-3 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em] uppercase text-white">
                    Lana Steiner
                  </h2>

                  <p className="rotate-90 absolute bottom-54 right-52 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em]">
                    06/24
                  </p>

                  <p className="rotate-90 absolute top-46 -left-32 font-[Manrope] font-semibold text-[28.35px] leading-[100%] tracking-[0.15em] text-white">
                    1234 1234 1234 1234
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="absolute rotate-[33deg] top-1/2 left-[52%] -translate-y-[30%]">
              <GlassCard>
                <div className="flex flex-col items-center h-full text-center">
                  <h5 className="rotate-90 absolute top-20 right-1 font-semibold text-[28.35px] leading-[100%] tracking-[0em] text-gray-800 dark:text-white">
                    Untitled.
                  </h5>

                  <h2 className="rotate-90 absolute top-27 left-3 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em] uppercase text-white">
                    Demi Wilkinson
                  </h2>

                  <p className="rotate-90 absolute bottom-54 right-52 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em]">
                    06/24
                  </p>

                  <p className="rotate-90 absolute top-46 -left-32 font-[Manrope] font-semibold text-[28.35px] leading-[100%] tracking-[0.15em] text-white">
                    1234 1234 1234 1234
                  </p>

                  <div className="absolute top-120 left-4 w-10 h-10 rounded-md bg-white/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white" />
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="absolute rotate-[65deg] top-1/2 left-[62%] -translate-y-[1%] ">
              <GlassCard>
                <div className="flex flex-col items-center h-full text-center">
                  <h5 className="rotate-90 absolute top-20 right-1 font-semibold text-[28.35px] leading-[100%] tracking-[0em] text-gray-800 dark:text-white">
                    Untitled.
                  </h5>

                  <h2 className="rotate-90 absolute top-22 left-3 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em] uppercase text-white">
                    Candice wu
                  </h2>

                  <p className="rotate-90 absolute bottom-54 right-52 font-[Manrope] font-semibold text-[21.27px] leading-[100%] tracking-[0.05em]">
                    06/24
                  </p>

                  <p className="rotate-90 absolute top-46 -left-32 font-[Manrope] font-semibold text-[28.35px] leading-[100%] tracking-[0.15em] text-white">
                    1234 1234 1234 1234
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
