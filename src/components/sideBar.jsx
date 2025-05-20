import React from 'react'
import '../styles/components.modules.css'
import {Icons} from '../assets/IconLibrary'

export default function SideBar(props) {
    

    return (
        <>
            <div className="sideBar">
                <img src="#" alt="logo" className='logo'/>

                <div className="menu">
                    <ul>
                        <li className="menuItem"><Icons.Dashboard /> <p> Dashboard</p></li>
                        <li className="menuItem"><Icons.Store /> <p> Stores</p></li>
                        <li className="menuItem"><Icons.Product /> <p> Products</p></li>
                        <li className="menuItem"><Icons.Users /> <p>Users</p></li>
                        <li className="menuItem"><Icons.Orders /> <p>Orders</p></li>
                        <li className="menuItem"><Icons.Reports /> <p>Reports</p></li>
                        <li className="menuItem"><Icons.Settings /> <p>Settings</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
