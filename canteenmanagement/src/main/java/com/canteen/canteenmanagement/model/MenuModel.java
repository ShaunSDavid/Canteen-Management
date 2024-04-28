package com.canteen.canteenmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Menu")
public class MenuModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String Itemname;
    private String Itemimage;
    private int Price;
    private String Itemdesc;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemname() {
        return Itemname;
    }

    public void setItemname(String itemname) {
        Itemname = itemname;
    }

    public String getItemimage() {
        return Itemimage;
    }

    public void setItemimage(String Itemimage) {
        this.Itemimage = Itemimage;
    }

    public int getPrice() {
        return Price;
    }

    public void setPrice(int Price) {
        this.Price = Price;
    }

    public String getItemDesc() {
        return Itemdesc;
    }

    public void setItemDesc(String Itemdesc) {
        this.Itemdesc = Itemdesc;
    }

}
