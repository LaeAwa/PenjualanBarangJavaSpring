
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomeBarang from './pages/HomeBarang';
import AddBarang from './view/AddBarang';
import EditBarang from "./view/EditBarang";
import HomePenjual from "./pages/HomePenjual";
import AddPenjual from "./view/AddPenjual";
import EditPenjual from "./view/EditPenjual";





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path="/homebarang" element={<HomeBarang />}></Route>

          <Route exact path="/addbarang" element={<AddBarang />}></Route>

          <Route exact path="/editbarang/:kode_barang" element={<EditBarang />}></Route>

          <Route exact path="/homepenjualan" element={<HomePenjual />}></Route>

          <Route exact path="/addpenjualan" element={<AddPenjual />}></Route>

          <Route exact path="/editpenjualan/:no_faktur" element={<EditPenjual />}></Route>

        </Routes>

      </Router>
      {/* <div>
        <NavbarPembeli />
      </div> */}
    </div>
    
  );
}

export default App;
