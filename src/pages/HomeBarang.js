import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function HomeBarang() {

    const [barang, setBarang] = useState([]);
    const {kode_barang} = useParams();

    useEffect(() => {
        loadBarang();
    }, []);
    

    const loadBarang = async () => {
        const result = await axios.get("http://localhost:8080/barang/findall")
        setBarang(result.data);
    };

    const deleteBarang = async (kode_barang) => {
        await axios.delete(`http://localhost:8080/barang/delete/${kode_barang}`)
        loadBarang();
    };
    return (
        <div className="container">
            <div className='py-4'>

                <table className='table border show'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama Barang</th>
                            <th scope="col">Harga Jual</th>
                            <th scope="col">Harga Beli</th>
                            <th scope="col">Satuan</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            barang.map((barang, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    {/**barang.kode_barang */}
                                    <td>{barang.nama_barang}</td>
                                    <td>{barang.harga_jual}</td>
                                    <td>{barang.harga_beli}</td>
                                    <td>{barang.satuan}</td>
                                    <td>{barang.kategori}</td>
                                    <td>

                                        <Link className="btn btn-primary mx-2"
                                        to={`/editbarang/${barang.kode_barang}`}>
                                            Edit
                                        </Link>

                                        <button className="btn btn-danger"
                                            onClick={() => deleteBarang(barang.kode_barang)}>
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
