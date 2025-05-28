import React, { useState } from 'react'
import {Outlet, Link} from 'react-router-dom'
import '../styles/components.modules.css'
import {Icons} from '../assets/IconLibrary'

export default function SideBar(props) {
    const [selected, setSelected] = useState('Dashboard');
    

    return (
        <>
            <div className="sideBar">
                <img src="#" alt="logo" className='logo'/>

                <div className="menu">
                    <ul>
                        <Link to="/Dashboard">
                        <li className={selected === "Dashboard" ? "active" : ""} onClick={()=> setSelected("Dashboard")} ><Icons.Dashboard /> <p> Dashboard</p></li></Link>
                        <Link to="/stores">
                        <li className={selected === "stores" ? "active" : ""} onClick={()=> setSelected("stores")}><Icons.Store /> <p> Stores</p></li></Link>
                        <Link to="/products">
                        <li className={selected === "products" ? "active" : ""} onClick={()=> setSelected("products")}><Icons.Product /> <p> Products</p></li></Link>
                        <Link to="/users">
                        <li className={selected === "users" ? "active" : ""} onClick={()=> setSelected("users")}><Icons.Users /> <p>Users</p></li></Link>
                        <Link to="/orders">
                        <li className={selected === "orders" ? "active" : ""} onClick={()=> setSelected("orders")}><Icons.Orders /> <p>Orders</p></li></Link>
                        <Link to="reports">
                        <li className={selected === "reports" ? "active" : ""} onClick={()=> setSelected("reports")}><Icons.Reports /> <p>Reports</p></li></Link>
                        <Link to="settings">
                        <li className={selected === "settings" ? "active" : ""} onClick={()=> setSelected("settings")}><Icons.Settings /> <p>Settings</p></li></Link>
                        <Outlet />
                    </ul>
                </div>
            </div>
        </>
    )
}
