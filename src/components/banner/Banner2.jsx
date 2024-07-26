import React from "react";
import Banner2Img from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({togglePlay}) => {
  return (
    <div>
      <div className="container pt-10 sm:py-0 min-h-[500px] relative">
        <div className="flex flex-col gap-14">
          {/* Banner 1 section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
            <div className="order-1 sm:order-2">
              <img data-aos="fade-up" data-aos-once="false" className="w-full max-w-[400px]" src={Banner2Img} alt="" />
            </div>

            <div className="order-2 sm:order-1  lg:pr-20 relative ">
              <div className="relative z-10 space-y-5">
                <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                BREAK DOWN LANGUAGE BARRIER WITH{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  AR GLASSES EXPERIENCES
                  </span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="300">
                Language experiences come alive when delivered in your line-of-sight, helping you communicate with someone who speaks a different language or might be deaf or hard of hearing.
                </p>
                <div className="flex gap-6">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="primary-btn"
                  >
                    Get Started
                  </button>
                  <button
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className="flex items-center gap-2"
                    onClick={togglePlay}
                  >
                    {" "}
                    <BiPlayCircle className="text-3xl" />
                    See Demo
                  </button>
                </div>
              </div>
              <div className="w-[250px] h-[250px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-100px] left-[250px] blur-3xl opacity-40"></div>
            </div>
          </div>
          {/* Banner 2 section */}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
