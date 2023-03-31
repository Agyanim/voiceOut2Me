import React from "react";
import { Link } from "react-router-dom";
import AboutHeroImage from "../../assets/images/landing page/about-us-hero-image.svg";
import LeftTriangle from "../../assets/images/landing page/left-triangle.svg";

const AboutSection = () => {
  return (
    <>
      <section className="w-[95vw]  xl:w-[92vw] ml-auto  mt-[5rem] font-Lato">
      <div className="flex  items-center mb-[8rem]">
            <h1 className="bg-[#695E93BF] text-white  text-[32px] font-bold w-[15rem] lg:w-[18.375rem] h-[5.813rem]  flex justify-center items-center">
              About Us
            </h1>
            <span className="absolute left-0">
              <img className="w-[1rem] lg:w[2rem]" src={LeftTriangle} alt="left triangle" />
            </span>
          </div>
<section className="flex flex-col-reverse lg:flex-row lg:mt-[-9rem] w-[100%] bg-green-100">

        <div className=" w-[93%] about-text-wrapper lg:w-[55%] relative bg-yellow-100 flex">
          <div className="flex flex-col gap-10 md:w-[35rem] lg:w-[100%]">
            <div className="bg-red-300">
              <h1 className="text-xl sm:text-[22px] md:text-2xl  lg:text-[2.1rem] lg:leading-[3rem]  text-black font-bold  overflow-hidden pt-[3rem]">
                We help every individuals snap out of their <span className="text-[#695E93]">depression zone</span>
              </h1>
              <p className="w-[19rem] sm:w-[30rem] lg:w-[35rem] lg:text-lg xl:w-[36.375rem] pt-10 xl:text-xl">
                VoiceOut2Me is an online platform developed to improve
                everyone’s overall mental wellness. Through virtual
                psychotherapy, we want to nip depression in the bud before it
                gets out of hand.
              </p>
            </div>
            <div className="w-[100%]">
              <h1 className="text-xl lg:text-2xl font-[600]">Our Mission</h1>
              <p className="md:w-[30rem] lg:w-[33rem] xl:w-[35.75rem] ">
                Our mission is to increase the overall wellness of depressed
                people by providing the Professional Pschotherapist to serve
                their needs.
              </p>
              <button className="border-[1px] border-black rounded-lg py-2 px-4 mt-10 transition-all  hover:scale-105"><Link to={"/about"}>READ MORE</Link></button>
            </div>
          </div>
        </div>
{/* About secsion hero image */}
        <div
          className=" about-hero-wrapper ml-[10%] w-[90%] h-[20rem]  sm:ml-[25%] md:ml-[28%] lg:ml-0 sm:w-[50%] lg:w-[45%]   lg:h-[40rem] xl:w-[50%] xl:h-[48rem] mt-[-5rem] bg-blue-500"
          style={{
            background: `url(${AboutHeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
</section>
      </section>
    </>
  );
};

export default AboutSection;
