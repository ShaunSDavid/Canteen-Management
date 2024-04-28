package com.canteen.canteenmanagement.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.canteen.canteenmanagement.model.AdminModel;
import com.canteen.canteenmanagement.repository.AdminRepo;

@Service
public class AdminService {
    @Autowired
    private AdminRepo repo;

    public AdminModel add(int OrderId, String Time, int Price, String Status) {
        AdminModel user = new AdminModel();
        user.setOrderId(OrderId);
        user.setPrice(Price);
        user.setStatus(Status);
        user.setTime(Time);
        return repo.save(user);
    }

    public List<AdminModel> getAllOrders() {
        return repo.findAll();
    }

}
