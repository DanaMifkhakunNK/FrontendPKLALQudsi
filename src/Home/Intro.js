import React from "react";
import IntroVid from "../assets/intro.mp4";

function Intro() {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video autoPlay loop muted className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]">
            <source src={IntroVid} type="video/mp4" />
          </video>
          <div className="h-full flex justify-center items-center text-center">
            <div className="text-white">
              <p data-aos="fade-up" className="text-5xl font-bold">
                TRAVEL HAJI & UMRAH TERBAIK
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="font-bold text-7xl">
                AL QUDSI TOUR & TRAVEL
              </p>
              <p data-aos="fade-up" data-aos-delay="500" className="text-2xl">
                Kami selalu memberikan pelayanan terbaik demi keamanan dan kenyamanan ibadah Anda dan keluarga
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
