import React from 'react'
import {Icons} from '../assets/IconLibrary'

export default function TopBar(props) {
    

    return (
        <>
            <div className="topBar">
                <div className="searchBox">
                <div className="searchBtn">
                    <Icons.Search className='icon'/>
                    </div>
                    <input type="text" placeholder='Search' className='searchBox'/>
                </div>
                <div className="opts">
                    <div className="opt">
                    <Icons.Notifications className='icon'/>
                    </div>
                    <div className="opt">
                    <Icons.Profile className='icon'/>
                    </div>
                </div>
            </div>
        </>
    )
}
