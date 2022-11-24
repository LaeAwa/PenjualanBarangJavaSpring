package com.penjualansperpat.penjualan.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class BarangNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(BarangNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler (BarangNotFoundException exception){

        Map<String, String> errormap = new HashMap<>();
        errormap.put("error message", exception.getMessage());

        return errormap;
    }
    
}
