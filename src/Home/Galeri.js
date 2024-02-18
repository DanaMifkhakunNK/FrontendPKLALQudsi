import React from "react";
import Slider from "react-slick";
import img1 from "../assets/wp.png";
import img2 from "../assets/wp2.jpg";
import img3 from "../assets/banner.jpg";

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
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
    <div className="pt-16 bg-gray-100" id="galeri">
      <div className="container">
        {/* 
      </div>
      <section data-aos="zoom-in" className="w-full">
        <div className="slide-container">
          <Slider {...settings} className="">
            {slides.map(({ url }) => (
              <img className="flex m-auto p-1 h-[50vh] w-[100%] rounded-lg" src={url} />
            ))}
          </Slider>
        </div>
      </section> */}
        <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 mx-auto gap-6">
          <h1 className=" my-8 border-l-8 border-primary/50 py-1 pl-1 text-2xl font-bold">Galeri</h1>
          <Slider {...settings}>
            {slides.map(({ url }) => {
              return (
                <div className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 h-[36vh] text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
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
