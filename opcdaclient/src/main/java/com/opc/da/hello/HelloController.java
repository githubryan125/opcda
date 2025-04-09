package com.opc.da.hello;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String helloWorld() {
        return "layout/layout";
    }
    
    @GetMapping("/layout")
    public String helloWorld2() {
        return "fragment/index";
    }
    
    @GetMapping("/modal")
    public String helloWorld3() {
        return "popup/create-group";
    }
    
    @GetMapping("/testitem")
    public String itemmodaltest() {
        return "popup/create-items";
    }
    
    @GetMapping("/footer")
    public String footertest() {
    	return "fragment/footer";
    }
    @GetMapping("/test")
    public String test() {
    	return "test/testfile";
    }
    @GetMapping("/grid")
    public String toastgrid() {
    	return "test/gridtest";
    }
}