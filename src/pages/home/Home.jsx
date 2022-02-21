import React, { useContext } from 'react'
import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import Rigthbar from '../../components/rightbar/Rigthbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { AuthContext } from '../../context/AuthContext'
import './home.css'
//import { Posts } from '../../dummyData'

export default function Home() {
    const {user} = useContext(AuthContext);

    return (
        <>
            <Navbar user={user}></Navbar>

            <div className='container'>
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rigthbar></Rigthbar>
            </div>
            
        </>
    );
}
