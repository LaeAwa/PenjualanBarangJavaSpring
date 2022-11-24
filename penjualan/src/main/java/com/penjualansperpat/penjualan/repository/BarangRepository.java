package com.penjualansperpat.penjualan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penjualansperpat.penjualan.entity.Barang;

public interface BarangRepository extends JpaRepository<Barang, Integer>{
    
}
