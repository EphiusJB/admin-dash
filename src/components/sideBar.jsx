import React, { useState } from 'react'
import {Outlet, Link} from 'react-router-dom'
import '../styles/components.modules.css'
import {Icons} from '../assets/IconLibrary'

export default function SideBar(props) {
    const [page, setPage] = useState('Dashboard')
    

    return (
        <>
            <div className="sideBar">
                <img src="#" alt="logo" className='logo'/>

                <div className="menu">
                    <ul>
                        <Link to="/Dashboard">
                        <li className="menuItem"><Icons.Dashboard /> <p> Dashboard</p></li></Link>
                        <Link to="/stores">
                        <li className="menuItem"><Icons.Store /> <p> Stores</p></li></Link>
                        <Link to="/products">
                        <li className="menuItem"><Icons.Product /> <p> Products</p></li></Link>
                        <Link to="/users">
                        <li className="menuItem"><Icons.Users /> <p>Users</p></li></Link>
                        <Link to="/orders">
                        <li className="menuItem"><Icons.Orders /> <p>Orders</p></li></Link>
                        <Link to="reports">
                        <li className="menuItem"><Icons.Reports /> <p>Reports</p></li></Link>
                        <Link to="settings">
                        <li className="menuItem"><Icons.Settings /> <p>Settings</p></li></Link>
                        <Outlet />
                    </ul>
                </div>
            </div>
        </>
    )
}
