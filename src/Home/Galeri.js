import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

function Galeri() {
  const [getgaleri, setGetgaleri] = useState([]);
  useEffect(() => {
    const fecthGaleri = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/galeri`);
        setGetgaleri(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthGaleri();
  }, []);

  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16 " id="galeri">
      <div className="container">
        <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 mx-auto gap-6">
          <h1 className=" my-8 border-l-8 border-primary/50 py-1 pl-1 text-2xl font-bold">Galeri</h1>
          <Slider {...settings}>
            {getgaleri.map(({ galeri }) => {
              return (
                <div className="my-6">
                  <div className="flex flex-col justify-center items-center gap-2 text-center shadow-xl p-4 mx-4 rounded-xl  bg-primary/10 relative">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/galeri/${galeri}`} alt="" className="rounded-lg block mx-auto shadow-lg" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Galeri;
