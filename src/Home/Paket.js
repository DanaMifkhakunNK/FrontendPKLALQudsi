import React from "react";
import img1 from "../assets/brosur1.jpg";
import img2 from "../assets/brosur1.jpg";

const PlacesData = [
  {
    img: img1,
    title: "Umrah Reguler",
    time: "30 Juni 2024",
    price: "30",
  },
  {
    img: img2,
    title: "Umrah Plus Turki",
    time: "1 Juli 2024",
    price: "35",
  },
  {
    img: img1,
    title: "Umrah Premium",
    time: "2 Juli 2024",
    price: "33",
  },
];
function Paket() {
  return (
    <>
      <div className="pt-16 bg-green-50 py-10" id="paket">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Best Places to Visit</h1>
          <div className=" grid-auto-fit-sm grid gap-4">
            {PlacesData.map(({ img, title, time, price }) => (
              <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
                <div className="overflow-hidden">
                  <img src={img} alt="No image" className="mx-auto w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
                </div>
                <div className="space-y-2 p-3">
                  <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>

                  <p className="line-clamp-2">{time}</p>
                  <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                    <div>
                      <p className="text-2xl font-bold">${price}</p>
                    </div>
                    <a href="wa.me/6282242478858" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-sm">
                      Lebih Detail...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Paket;
