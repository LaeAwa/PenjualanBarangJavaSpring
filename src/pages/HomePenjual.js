import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function HomePenjual() {

    const [penjual, setPenjual] = useState([]);
    const {no_faktur} = useParams();

    useEffect(() => {
        loadPenjual();
    }, []);
    

    const loadPenjual = async () => {
        const result = await axios.get("http://localhost:8080/penjual/findallpenjual")
        setPenjual(result.data);
    };

    const deletePenjual = async (no_faktur) => {
        await axios.delete(`http://localhost:8080/penjual/deletepenjualan/${no_faktur}`)
        loadPenjual();
    };
    return (
        <div className="container">
            <div className='py-4'>
                <table className='table border show'>
                    <thead>
                        <tr>
                        
                        <th scope="col">#</th>
                            {/* <th scope="col">No Faktur</th> */}
                            
                            <th scope="col">Tanggal</th>


                            <th scope="col">Nama Konsumen</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Harga Satuan</th>
                            <th scope="col">Harga Total</th>
                            <th scope="col">Kode Barang</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            penjual.map((penjual, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    {/**barang.kode_barang */}
                                    
                                    <td>{penjual.tgl_faktur}</td>
                                    <td>{penjual.nama_konsumen}</td>
                                    <td>{penjual.jumlah}</td>
                                    <td>{penjual.harga_satuan}</td>
                                    <td>{penjual.harga_total}</td>
                                    <td>{penjual.kode_barang}</td>
                                    <td>

                                        <Link className="btn btn-primary mx-2"
                                        to={`/editpenjualan/${penjual.no_faktur}`}>
                                            Edit
                                        </Link>

                                        <button className="btn btn-danger"
                                            onClick={() => deletePenjual(penjual.no_faktur)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>

        </div>
    )
}
