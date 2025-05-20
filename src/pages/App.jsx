import { useState } from 'react'
import '../styles/App.css'

//components imports
import SideBar from '../components/sideBar.jsx'

function App() {

  return (
    <>
      <div className="Mainlayout">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <div className="header">
            <h1>Header</h1>
          </div>
          <div className="content">
            <h2>Content</h2>
          </div>
          <div className="footer">
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
