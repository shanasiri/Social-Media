import React from 'react'
import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import Rigthbar from '../../components/rightbar/Rigthbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rigthbar></Rigthbar>
            </div>
            
        </>
    ) 
}
