import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditBarang() {

    let navigate=useNavigate()

    const {kode_barang} = useParams();

    // POST data and GET data
    const[barang, setBarang] = useState({
        nama_barang: "",
        harga_jual: "",
        harga_beli: "",
        satuan: "",
        kategori: ""
    });

    const{nama_barang, harga_jual, harga_beli, satuan, kategori} = barang

    const onInputChange=(e) => {
        setBarang({...barang, [e.target.name]: e.target.value});
    };

    useEffect(() =>{
        loadBarang();
    }, []);

    const onSubmit= async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/barang/update/${kode_barang}`, barang);
        navigate("/homebarang");
    };

    const loadBarang = async() => {
        const result = await axios.get(`http://localhost:8080/barang/${kode_barang}`)
        setBarang(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h3 className="text-center m-1">Register</h3>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label className="form-label">Nama
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Nama Barang"
                            name="nama_barang"
                            value={nama_barang}
                            onChange={(e)=>onInputChange(e)}>
                        </input>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Harga Jual
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Harga Jual"
                            name="harga_jual"
                            value={harga_jual}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Harga Beli
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Harga Beli"
                            name="harga_beli"
                            value={harga_beli}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Satuan
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Satuan"
                            name="satuan"
                            value={satuan}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Kategori
                        </label>

                        <input type={"text"}
                            class="form-control"
                            placeholder="Kategori"
                            name="kategori"
                            value={kategori}
                            onChange={(e)=>onInputChange(e)}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-outline-primary mx-2">
                        Edit
                    </button>
                    <Link type="submit" className="btn btn-outline-danger mx-2" to={"/homebarang"}>
                        Cancel
                    </Link>
                    </form>

                    
                </div>
            </div>
        </div>
    )
}
