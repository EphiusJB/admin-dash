import { useState } from 'react'
import '../styles/App.css'

//components imports
import SideBar from '../components/sideBar.jsx'
import TopBar from '../components/topBar.jsx'
import Dashboard from './Dashboard.jsx'

function App() {

  return (
    <>
      <div className="Mainlayout">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
            <TopBar />
            <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
