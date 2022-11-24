package com.penjualansperpat.penjualan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penjualansperpat.penjualan.entity.Barang;
import com.penjualansperpat.penjualan.service.BarangService;

@RestController
@RequestMapping("/barang")
@CrossOrigin
// @CrossOrigin("http://localhost:3000")
public class BarangController {

    @Autowired
    private BarangService barangService;

    @PostMapping("/save")
    public Barang saveBarang(@RequestBody Barang barang){
        return barangService.createBarang(barang);
    }

    @GetMapping("/findall")
    public List<Barang> findAll(){
        return barangService.findAll();
    }

    @GetMapping("/{id}")
    public Barang findId(@PathVariable Integer id){
        return barangService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        barangService.deleteBarang(id);
    }

    @PutMapping("/update/{id}")
    public Barang updateBarang(@RequestBody Barang barang, @PathVariable Integer id){
        return barangService.updateBarang(barang, id);
    }
    
}
