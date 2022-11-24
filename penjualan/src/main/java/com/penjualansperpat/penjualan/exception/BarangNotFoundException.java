package com.penjualansperpat.penjualan.exception;

public class BarangNotFoundException extends RuntimeException {
    public BarangNotFoundException(Integer id){
        super("Could not found the user with id" + id);
    }

}
