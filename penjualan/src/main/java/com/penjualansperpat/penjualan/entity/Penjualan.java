package com.penjualansperpat.penjualan.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter @Getter
public class Penjualan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer no_faktur;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date tgl_faktur;

    @Column(length = 150, nullable = true)
    private String nama_konsumen;

    private long jumlah;
    private Double harga_satuan;
    private Double harga_total;

    @ManyToOne
    @JoinColumn(name = "kode_barang")
    private Barang barang;

    public Penjualan() {
    }

    public Penjualan(int no_faktur, Date tgl_faktur, String nama_konsumen, long jumlah, Double harga_satuan,
            Double harga_total) {
        this.no_faktur = no_faktur;
        this.tgl_faktur = tgl_faktur;
        this.nama_konsumen = nama_konsumen;
        this.jumlah = jumlah;
        this.harga_satuan = harga_satuan;
        this.harga_total = harga_total;
    }
    
    

}
