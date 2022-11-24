package com.penjualansperpat.penjualan.controller;



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

import com.penjualansperpat.penjualan.entity.Penjualan;
import com.penjualansperpat.penjualan.service.PenjualanService;

@RestController
@RequestMapping("/penjual")
@CrossOrigin
public class PenjualanController {
    
    @Autowired
    private PenjualanService penjualanService;

    @PostMapping("/savepenjualan")
    public Penjualan savePenjual(@RequestBody Penjualan penjualan){
        return penjualanService.createPenjual(penjualan);
    }

    @DeleteMapping("/deletepenjualan/{id}")
    public void deletePenjualan(@PathVariable Integer id){
        penjualanService.deletePenjual(id);
    }

    @GetMapping("/findallpenjual")
    public Iterable<Penjualan> findAll(){
        return penjualanService.findAll();
    }

    @GetMapping("/findidpenjual/{id}")
    public Penjualan findById(@PathVariable Integer id){
        return penjualanService.findById(id);
    }

    @PutMapping("updatepenjualan/{id}")
    public Penjualan updatePenjualan(@RequestBody Penjualan penjualan, @PathVariable Integer id){
        return penjualanService.updatPenjualan(penjualan, id);
    }
}
