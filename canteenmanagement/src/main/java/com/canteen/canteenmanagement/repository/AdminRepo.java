package com.canteen.canteenmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.canteen.canteenmanagement.model.AdminModel;

@Repository
public interface AdminRepo extends JpaRepository<AdminModel, String> {

}
