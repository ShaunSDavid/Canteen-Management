package com.canteen.canteenmanagement.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.canteen.canteenmanagement.model.AdminModel;
import com.canteen.canteenmanagement.model.CanteenModel;
import com.canteen.canteenmanagement.model.MenuModel;
import com.canteen.canteenmanagement.service.AdminService;
import com.canteen.canteenmanagement.service.LogService;
import com.canteen.canteenmanagement.service.MenuService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CanteenController {
    @Autowired
    private LogService service;

    @GetMapping("/")
    public String api() {

        return "login";
    }

    @PostMapping("/login")
    public CanteenModel login(@ModelAttribute("user") CanteenModel user) {

        return service.log(user.getUsername(), user.getPassword());
    }

    @Autowired
    private MenuService oservice;

    @GetMapping("/#my-order")
    public String api1() {
        return "menuorder";
    }

    @PostMapping("/menuorder")
    public MenuModel add(@ModelAttribute("user") MenuModel user) {
        MenuModel addMenuItem = oservice.add(user.getId(), user.getItemname(), user.getItemimage(), user.getItemDesc(),
                user.getPrice());
        return addMenuItem;
    }

    @Autowired
    private AdminService aservice;

    @GetMapping("/admin")
    public String api2() {
        return "adminmenu";
    }

    @PostMapping("/adminmenu")
    public AdminModel add(@ModelAttribute("user") AdminModel user) {
        AdminModel addorder = aservice.add(user.getOrderId(), user.getTime(), user.getPrice(), user.getStatus());
        return addorder;
    }

    @Autowired
    private AdminService adservice;

    @GetMapping("/#my-orders")
    public String api3() {
        return "adminall";
    }

    @PostMapping("/adminall")
    public List<AdminModel> retrieveAll() {
        return adservice.retrieveAll();
    }
}
