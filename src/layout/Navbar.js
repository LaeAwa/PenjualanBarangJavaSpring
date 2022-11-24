import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand">
                TEST DATA PENJUALAN
            </a>
            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <Link className="btn btn-outline-light mx-1" to={"/homebarang"}>
                Daftar Barang
            </Link>
            
            <Link className="btn btn-outline-light mx" to={"/addbarang"}>
                Add Barang
            </Link>

           

            <Link className="btn btn-outline-light mx-1" to={"/homepenjualan"}>
                Daftar Penjual
            </Link>

            <Link className="btn btn-outline-light" to={"/addpenjualan"}>
                Add Penjual
            </Link>

        
        </ul>
            

            
        </div>
    </nav>

</div>
  )
}
