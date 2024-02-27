import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/logo192.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContect";
import { useNavigate } from "react-router-dom";

const CreatePaket = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="bg-primary">
      <nav className="fixed top-0 right-0 w-full bg-white text-black shadow-2xl z-50  ">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/*logo*/}
            <div>
              <Link>
                <img src={Logo} alt="" className="h-16" />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">Kembali</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="h-screen flex flex-col md:flex-row justify-center lg:pt-20 pt-24 space-y-10 md:space-y-0 md:space-x-16 my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3">
          <div className="text-center md:text-left">
            <h3 className="mr-1 mb-2 my-8 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Tambah Paket AL Qudsi</h3>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Title Paket" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Waktu Keberangkatan" value={time} onChange={(e) => setTime(e.target.value)} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Harga Paket" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="file" onChange={(e) => setImg(e.target.files[0])} accept="png, jpg, jpeg" />

          <div className="text-center md:text-left">
            <button className="mt-4 bg-secondary hover:bg-black px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Tambah
            </button>
          </div>
        </div>
      </section>

      <div className="">
        <div className="text-center py-3 border-t-2 right-0 left-0 bottom-0 fixed border-gray-300/50 bg-primary text-white">@copyright 2024 All rights reserved || Made with ❤️ by Dilshad</div>
      </div>
    </div>
  );
};

export default CreatePaket;
