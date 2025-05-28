import { useState } from 'react'
import '../styles/App.css'

//components imports
import SideBar from '../components/sideBar.jsx'
import TopBar from '../components/topBar.jsx'
import Dashboard from './Dashboard.jsx'
import Stores from './Stores.jsx'
import Products from './Products.jsx'
import Users from './Users.jsx'
import Orders from './Orders.jsx'
import Reports from './Reports.jsx'
import Settings from './Settings.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="Mainlayout">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              {/* Add more routes as needed */}
              <Route path="/stores" element={<Stores />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} /> 
              {/* Example of a dynamic route */}
              {/* <Route path="/:page" element={<DynamicPage />} /> */}
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
