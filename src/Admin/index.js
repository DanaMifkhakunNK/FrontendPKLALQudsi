import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import EditPaket from "./EditPaket";
import { CreatePaket } from "./CreatePaket";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <Layout>
      <div className="">
        <p>Dashboard</p>

        <div className="pt-20">
          <Link to={"/paket"}>Paket</Link>
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
