import React from "react";
import RightRiangleImage from "../../assets/images/landing page/right-triangle.svg";
import BookingASessionImage from "../../assets/images/landing page/booking-a-session-image.svg";
import { Link } from "react-router-dom";

const BookingASession = () => {
  return (
    <>
      <div className="w-[93%] ml-auto font-Lato lg:mt-[-10rem] xl:mt-0 ">
        <section className=" header-wrapper w-[16rem] lg:w-[21.688rem] h-[5.813rem] bg-[#695E93BF] flex flex-col justify-center items-center gap-1 mt-[5rem] mr-0 lg:ml-[53%] ">
          <span className="absolute right-0">
            <img className="w-[1rem] lg:w-[2rem]" src={RightRiangleImage} alt="right triangle" />
          </span>
          <h1 className=" text-center lg:text-left text-2xl text-white font-[600]">
            Booking A Session Made Easy
          </h1>
        </section>
        <section className=" flex flex-col lg:flex-row gap-12 mt-[3rem] lg:mt-0 sm:ml-[20%] md:ml-0">
          <div
            className="w-[90%] h-[20rem] sm:w-[60%] md:ml-[19%] lg:ml-0 lg:w-[50%] lg:h-[33.575rem] rounded bg-white"
            style={{
              background: `url(${BookingASessionImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="w-[90%] lg:w-[48%]">
            <div className="text-button-wrapper flex flex-col items-center mt-[-5rem] sm:mt-[-25%] min-[425px]:mt-0 min-[700px]:mt-[-2rem] md:mt-0 lg:mt-[25%]"></div>
            <p
              className="sm:w-[36rem] md:w-[30rem] lg:w-[23.688rem] sm:ml-[-6.5rem] md:ml-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Depression isn’t a stigma, do not shy away from speaking out. Book
              a counselling session on our platform to share your burden. Sign
              In to start your booking session.
            </p>
            <button className=" text-white py-[17.5px] px-[49.58px] rounded mt-[40px] bg-[#8155BA] transition-all hover:opacity-70">
              <Link to={"/getstarted"}>BOOK A SESSION</Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingASession;
