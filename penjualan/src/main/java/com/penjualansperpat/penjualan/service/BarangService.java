package com.penjualansperpat.penjualan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penjualansperpat.penjualan.entity.Barang;
import com.penjualansperpat.penjualan.exception.BarangNotFoundException;
import com.penjualansperpat.penjualan.repository.BarangRepository;

@Service
@Transactional
public class BarangService {
    
    @Autowired
    private BarangRepository barangRepository;

    public Barang createBarang(Barang barang){
       return barangRepository.save(barang);
    }

    public String deleteBarang(Integer number){
        if(!barangRepository.existsById(number)){
            throw new BarangNotFoundException(number);
        }
        barangRepository.deleteById(number);
        return "Barang dengan Id " + number +"succes dihapus";
    }

    public List<Barang> findAll(){
        return barangRepository.findAll();
    }

    public Barang findById(Integer number){
        Optional <Barang> barang = barangRepository.findById(number);
        if(!barang.isPresent()){
            return null;
        }
        return barang.get();
    }

    public Barang updateBarang(Barang newbarang, int id){
        return barangRepository.findById(id)
        .map(barang -> {
            barang.setNama_barang(newbarang.getNama_barang());
            barang.setHarga_jual(newbarang.getHarga_jual());
            barang.setHarga_beli(newbarang.getHarga_beli());
            barang.setSatuan(newbarang.getSatuan());
            barang.setKategori(newbarang.getKategori());
            return barangRepository.save(barang);
        }).orElseThrow(() -> new BarangNotFoundException(id));
    }
}
