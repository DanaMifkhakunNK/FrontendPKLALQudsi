import React from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill } from "react-icons/pi";
import { IconContext } from "react-icons";
const PlaceAbout = [
  {
    number: <PiNumberCircleOneFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleTwoFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleThreeFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFourFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Konsumsi yang terjamin dari memulai perjalanan sampai selesai",
  },
];
function Tentang() {
  return (
    <div className="min-h-screen pt-16 bg-gray-100" id="tentang">
      <section data-aos="fade-up" className="container ">
        <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Tentang AL Qudsi</h1>
        <div className=" flex gap-2 justify-center flex-col text-justify pb-14">
          <h1>
            <span className="font-bold">AL QUDSI MERUPAKAN TRAVEL UMROH TERBAIK DAN TERPERCAYA DI INDONESIA</span> Alhamdulilah Sebuah kehormatan buat Rabbanitour.com menjadi salah satu dari 5 BPW beserta Amphuri dan Himpuh yang
            menandatangani MOU dengan Saudi Tourism Authority untuk mempromosikan wisata Saudi baik meningkatkan kunjungan jamaah umrah dan wisatawan non paket umroh yang akan explore negara Saudi. Selain itu juga untuk mempromosikan
            destinasi selain Madinah, Mekkah dan Jeddah yang selama ini menjadi rute klasik perjalanan ibadah umat Islam ke tanah haram.
          </h1>
          <h1>
            Rabbanitour.com website resmi PT Rabbani Semesta Utama adalah travel umroh bersertifikat Nasional. Menyediakan paket umroh dengan berbagai macam pilihan, di antara nya: Paket umroh premium, Paket umroh hemat, umroh plus Turki,
            umroh plus Aqso, umroh plus Mesir, umroh plus Uzbekistan serta paket umroh plus Eropa.
          </h1>
        </div>
        <h1 className=" my-8 border-l-8 border-primary/50 py-1 pl-1 text-2xl font-bold">Kelebihan AL Qudsi</h1>
        <div class="mt-12 grid grid-auto-fit-sm gap-8">
          {PlaceAbout.map(({ number, desc }) => (
            <div className="text-center">
              <span className="mx-auto flex h-8 w-8 rounded-full text-sm font-semibold">
                <span className="m-auto">{number}</span>
              </span>
              <h3 className="mt-2 text-lg font-semibold">{desc}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tentang;
