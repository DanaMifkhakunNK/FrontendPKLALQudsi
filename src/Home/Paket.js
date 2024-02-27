import React, { useState, useEffect } from "react";

import axios from "axios";

function Paket() {
  const [paket, setPaket] = useState([]);
  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/paket`);
        setPaket(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPaket();
  }, []);

  return (
    <>
      <div className="pt-16  py-10" id="paket">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Best Places to Visit</h1>
          <div className=" grid-auto-fit-sm grid gap-4">
            {paket.map(({ gambar, judul, tanggal, harga }) => (
              <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
                <div className="overflow-hidden">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${gambar}`} alt="No image" className="mx-auto w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
                </div>
                <div className="space-y-2 p-3">
                  <h1 className="line-clamp-1 font-bold text-xl">{judul}</h1>

                  <p className="line-clamp-2">{tanggal}</p>
                  <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                    <div>
                      <p className="text-2xl font-bold">${harga}</p>
                    </div>
                    <a
                      href={`https://wa.me/08231231412?text=Halo%20Admin%20AL-Qudsi%20Saya%20Tertarik%20Dengan%20${judul}.%20Bisa%20Infokan%20Lebih Lanjut.?%20`}
                      className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-sm"
                    >
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
