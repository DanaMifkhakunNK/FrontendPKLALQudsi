import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/brosur1.jpg";
import img2 from "../assets/wp2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContect";
import Loader from "../components/Loader";
import axios from "axios";

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
  //auth
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  //get
  const [paket, setPaket] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPaket = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/paket`);
        setPaket(response?.data);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    fetchPaket();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {paket.length > 0 ? (
        <div className="grid-auto-fit-sm container min-h-screen bg-primary lg:pt-20 pt-24 flex flex-col gap-2 z-0">
          {paket.map(({ _id: id, gambar, judul }) => (
            <paket key={id} className="flex items-center justify-between bg-white p-4 rounded-xl">
              <div className="flex gap-8 w-full items-center">
                <div className="w-[4rem] rounded-md overflow-hidden">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${gambar}`} alt="" />
                </div>
                <h5 className="">{judul}</h5>
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
          ))}
        </div>
      ) : (
        <h2>Tidak Ada paket</h2>
      )}
    </>
  );
}

export default PaketAdmin;
