import React from "react";
import Slider from "react-slick";
import img1 from "../assets/galeri1.jpg";
import img2 from "../assets/galeri2.jpg";
import img3 from "../assets/galeri3.jpg";

function Galeri() {
  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img1,
    },
    {
      url: img3,
    },
  ];
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
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
            {slides.map(({ url }) => {
              return (
                <div className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 lg:h-[30vh] md:h-[25vh] h-[40vh] text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                    <img src={url} alt="" className=" block mx-auto rounded-md" />
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
