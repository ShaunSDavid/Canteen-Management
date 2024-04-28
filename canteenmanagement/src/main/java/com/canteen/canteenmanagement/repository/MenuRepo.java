package com.canteen.canteenmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.canteen.canteenmanagement.model.MenuModel;

@Repository
public interface MenuRepo extends JpaRepository<MenuModel, String> {

}
