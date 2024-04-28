import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AdminMenu from "./AdminMenu";
import AdminPage from "./admin";
import MyCartPage from "./Cart";
import Dashboard from "./Dashboard";
import FoodCard from "./FoodCard";
import Login from "./Login";

const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/adminMenu" element={<AdminMenu/>}/>
        </Routes>
        
    )
}

export default AllRoutes;