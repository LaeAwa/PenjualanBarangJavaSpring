package com.penjualansperpat.penjualan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penjualansperpat.penjualan.entity.Penjualan;

public interface PenjualanRepository extends JpaRepository<Penjualan, Integer>  {
    
}
