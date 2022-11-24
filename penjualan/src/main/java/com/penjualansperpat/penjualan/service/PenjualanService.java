package com.penjualansperpat.penjualan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penjualansperpat.penjualan.entity.Penjualan;
import com.penjualansperpat.penjualan.exception.BarangNotFoundException;
import com.penjualansperpat.penjualan.repository.PenjualanRepository;



@Service
@Transactional
public class PenjualanService {
    
    @Autowired
    private PenjualanRepository penjualanRepository;

    public Penjualan createPenjual(Penjualan penjualan){
        return penjualanRepository.save(penjualan);
    }

    public void deletePenjual(int no){
        penjualanRepository.deleteById(no);
    }

    public List<Penjualan> findAll(){
        return penjualanRepository.findAll();
    }

    public Penjualan findById(int no){
        Optional <Penjualan> penjual = penjualanRepository.findById(no);
        if(!penjual.isPresent()){
            return null;
        }
        return penjual.get();
        
    }

    public Penjualan updatPenjualan(Penjualan newPenjualan, int no){
        return penjualanRepository.findById(no)
        .map(penjualan -> {
            penjualan.setNo_faktur(newPenjualan.getNo_faktur());
            penjualan.setNama_konsumen(newPenjualan.getNama_konsumen());
            penjualan.setJumlah(newPenjualan.getJumlah());
            penjualan.setHarga_satuan(newPenjualan.getHarga_satuan());
            penjualan.setHarga_total(newPenjualan.getHarga_total());
            penjualan.setBarang(newPenjualan.getBarang());
            return penjualanRepository.save(newPenjualan);
        }).orElseThrow(() -> new BarangNotFoundException(no));

    }

}
