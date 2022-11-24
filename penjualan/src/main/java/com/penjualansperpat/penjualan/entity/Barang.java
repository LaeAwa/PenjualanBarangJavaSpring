package com.penjualansperpat.penjualan.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Barang implements Serializable {
    

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer kode_barang;

    @Column(length = 100, nullable = true)
    private String nama_barang;

    @Column(nullable = true)
    private Double harga_jual;

    @Column(nullable = true)
    private Double harga_beli;

    private int satuan;

    @Column(length = 100, nullable = false)
    private String kategori;

    
    public Integer getKode_barang() {
        return kode_barang;
    }

    public void setKode_barang(Integer kode_barang) {
        this.kode_barang = kode_barang;
    }

    public String getNama_barang() {
        return nama_barang;
    }

    public void setNama_barang(String nama_barang) {
        this.nama_barang = nama_barang;
    }

    public Double getHarga_jual() {
        return harga_jual;
    }

    public void setHarga_jual(Double harga_jual) {
        this.harga_jual = harga_jual;
    }

    public Double getHarga_beli() {
        return harga_beli;
    }

    public void setHarga_beli(Double harga_beli) {
        this.harga_beli = harga_beli;
    }

    public int getSatuan() {
        return satuan;
    }

    public void setSatuan(int satuan) {
        this.satuan = satuan;
    }

    public String getKategori() {
        return kategori;
    }

    public void setKategori(String kategori) {
        this.kategori = kategori;
    }

    public Barang(Integer kode_barang, String nama_barang, Double harga_jual, Double harga_beli, int satuan,
            String kategori) {
        this.kode_barang = kode_barang;
        this.nama_barang = nama_barang;
        this.harga_jual = harga_jual;
        this.harga_beli = harga_beli;
        this.satuan = satuan;
        this.kategori = kategori;
    }

    public Barang() {
    }
    

    

}

