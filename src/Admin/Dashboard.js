import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [kontak, setKontak] = useState([]);
  useEffect(() => {
    const fetchKontak = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/kontak`);
        setKontak(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchKontak();
  }, []);
  return (
    <div className="bg-primary w-full">
      <div className="container min-h-screen  lg:pt-20 pt-24 pb-16">
        <nav className="fixed top-0 right-0 w-full bg-white text-black shadow-2xl z-50  ">
          <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center">
              {/*logo*/}
              {kontak.map(({ logo }) => (
                <div>
                  <Link>
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/logo/${logo}`} alt="" className="h-16" />
                  </Link>
                </div>
              ))}
              {/*menu*/}
              <div className="flex items-center gap-4">
                <Link to="/logout" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="grid gap-2">
          <div className="p-4 bg-white/70 rounded-xl">
            <div className="gap-8 w-full items-center">
              <div className=" flex justify-between items-center pb-2">
                <h4 className="font-semibold pt-2">PAKET</h4>
                <div className="gap-2 flex">
                  <Link to="/paket" className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/70 rounded-xl">
            <div className="gap-8 w-full items-center">
              <div className=" flex justify-between items-center pb-2">
                <h4 className="font-semibold pt-2">GALERI</h4>
                <div className="gap-2 flex">
                  <Link to={`/galeri`} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/70 rounded-xl">
            <div className="gap-8 w-full items-center">
              <div className=" flex justify-between items-center pb-2">
                <h4 className="font-semibold pt-2">TESTI</h4>
                <div className="gap-2 flex">
                  <Link to={`/testi`} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/70 rounded-xl">
            <div className="gap-8 w-full items-center">
              <div className=" flex justify-between items-center pb-2">
                <h4 className="font-semibold pt-2">KONTAK</h4>
                <div className="gap-2 flex">
                  <Link to={`/kontak`} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
