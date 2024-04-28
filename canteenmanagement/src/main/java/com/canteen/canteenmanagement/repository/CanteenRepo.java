package com.canteen.canteenmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.canteen.canteenmanagement.model.CanteenModel;

@Repository
public interface CanteenRepo extends JpaRepository<CanteenModel, String> {
    CanteenModel findByUsernameAndPassword(String username, String password);

    @SuppressWarnings({ "unchecked", "null" })
    CanteenModel save(CanteenModel user);
}
