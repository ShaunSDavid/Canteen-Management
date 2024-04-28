package com.canteen.canteenmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.canteen.canteenmanagement.model.MenuModel;
import com.canteen.canteenmanagement.repository.MenuRepo;

@Service
public class MenuService {
    @Autowired
    private MenuRepo repo;

    public MenuModel add(int id, String Itemname, String Itemimage, String Itemdesc, int Price) {
        MenuModel user = new MenuModel();
        user.setId(id);
        user.setItemname(Itemname);
        user.setItemimage(Itemimage);
        user.setItemDesc(Itemdesc);
        user.setPrice(Price);
        return repo.save(user);
    }

}
