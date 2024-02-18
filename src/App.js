import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import PaketAdmin from "./Admin/PaketAdmin";
import GaleriAdmin from "./Admin/GaleriAdmin";
import TestiAdmin from "./Admin/TestiAdmin";
import KontakAdmin from "./Admin/KontakAdmin";
import LoginAdmin from "./Admin/LoginAdmin";
import EditPaket from "./Admin/EditPaket";
import DeletePaket from "./Admin/DeletePaket";
import CreatePaket from "./Admin/CreatePaket";
import tambahGaleri from "./Admin/addGaleri";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/paket" element={<PaketAdmin />} />
        <Route path="/galeri" element={<GaleriAdmin />} />
        <Route path="/testi" element={<TestiAdmin />} />
        <Route path="/kontak" element={<KontakAdmin />} />
        <Route path="/paket/:id/edit" element={<EditPaket />} />
        <Route path="/paket/:id/delete" element={<DeletePaket />} />
        <Route path="/paket/create" element={<CreatePaket />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/galeri/add" element={<tambahGaleri />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
