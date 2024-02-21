import React from "react";
import Layout from "../components/Layout";
import img1 from "../assets/brosur1.jpg";
import img2 from "../assets/wp2.jpg";
import { Link } from "react-router-dom";
const PlacesData = [
  {
    id: "1",
    img: img1,
    title: "Umrah Reguler",
    time: "30 Juni 2024",
    price: "30",
  },
  {
    id: "2",
    img: img2,
    title: "Umrah Plus Turki",
    time: "1 Juli 2024",
    price: "35",
  },
  {
    id: "3",
    img: img1,
    title: "Umrah Premium",
    time: "2 Juli 2024",
    price: "33",
  },
];
function PaketAdmin() {
  return (
    <Layout>
      <div className="grid-auto-fit-sm container min-h-screen bg-primary lg:pt-20 pt-24 flex flex-col gap-2">
        {PlacesData.map((paket) => {
          return (
            <paket key={paket.id} className="flex items-center justify-between bg-white p-4 rounded-xl">
              <div className="flex gap-8 w-full items-center">
                <div className="w-[4rem] rounded-md overflow-hidden">
                  <img src={paket.img} alt="" />
                </div>
                <h5 className="">{paket.title}</h5>
              </div>
              <div className="gap-2 flex">
                <Link to={"/paket/${paket.id}/edit"} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                  Edit
                </Link>
                <Link to={"/paket/${paket.id}/delete"} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                  Delete
                </Link>
              </div>
            </paket>
          );
        })}
      </div>
    </Layout>
  );
}

export default PaketAdmin;
