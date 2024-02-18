import React, { useState } from "react";
import Layout from "../components/Layout";

const CreatePaket = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  return (
    <Layout>
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
    </Layout>
  );
};

export default CreatePaket;
