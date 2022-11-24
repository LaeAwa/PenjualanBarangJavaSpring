import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditPenjual() {

    let navigate=useNavigate()

    const {no_faktur} = useParams();

    // POST data and GET data
    const[penjual, setPenjual] = useState({
        tgl_faktur: "",
        nama_konsumen: "",
        jumlah: "",
        harga_satuan: "",
        harga_total: "",
        kode_barang: ""
    });

    const{tgl_faktur, nama_konsumen, jumlah, harga_satuan, harga_total, kode_barang} = penjual

    const onInputChange=(e) => {
        setPenjual({...penjual, [e.target.name]: e.target.value});
    };

    useEffect(() =>{
        loadPenjual();
    }, []);

    const onSubmit= async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/penjual/updatepenjualan/${no_faktur}`, penjual);
        navigate("/homepenjualan");
    };

    const loadPenjual = async() => {
        const result = await axios.get(`http://localhost:8080/penjual/findidpenjual/${no_faktur}`)
        setPenjual(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h3 className="text-center m-1">Edit Penjualan</h3>

                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                        <label className="form-label">Tanggal
                        </label>

                        <input type={"date"}
                            class="form-control"
                            placeholder="Nama Barang"
                            name="tgl_faktur"
                            value={tgl_faktur}
                            onChange={(e)=>onInputChange(e)}>
                        </input>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nama Konsumen
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Nama Konsumen"
                            name="nama_konsumen"
                            value={nama_konsumen}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Jumlah
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Jumlah"
                            name="jumlah"
                            value={jumlah}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Harga Satuan
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Harga Satuan"
                            name="harga_satuan"
                            value={harga_satuan}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Harga Total
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Harga Total"
                            name="harga_total"
                            value={harga_total}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Kode Barang
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Kode Barang"
                            name="kode_barang"
                            value={kode_barang}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-outline-primary mx-2">
                        Edit
                    </button>
                    <Link type="submit" className="btn btn-outline-danger mx-2" to={"/homepenjualan"}>
                        Cancel
                    </Link>
                    </form>

                    
                </div>
            </div>
        </div>
    )
}
