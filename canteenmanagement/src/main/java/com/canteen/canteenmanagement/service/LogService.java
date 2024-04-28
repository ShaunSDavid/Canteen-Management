package com.canteen.canteenmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.canteen.canteenmanagement.model.CanteenModel;
import com.canteen.canteenmanagement.repository.CanteenRepo;

@Service
public class LogService {
    @Autowired
    private CanteenRepo rep;

    public CanteenModel log(String username, String password) {
        CanteenModel user = rep.findByUsernameAndPassword(username, password);
        return user;
    }
}
