import React from 'react'
import './profile.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rigthbar from '../../components/rightbar/Rigthbar'


export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div>
            <>
                <Navbar></Navbar>

                <div className='profile'>
                    <Sidebar></Sidebar>
                    <div className='profile-right'>
                        <div className='profile-rightTop'>
                            <div className="profile-cover">
                                <img className='profile-coverImg' src={`${PF}post/1.jpg`} alt="" />
                                <img className='profile-userImg' src={`${PF}user/1.jpg`} alt="" />
                            </div>

                            <div className="profile-info">
                                <h4 className='profile-infoName'>Shanaka Asiri</h4>
                                <span className='profile-infoDesc'>Description</span>
                            </div>
                            
                        </div>
                        <div className='profile-rightBottom'>
                            <Feed></Feed>
                            <Rigthbar profile></Rigthbar>
                        </div>
                        
                    </div>
                    
                </div>
                
            </>
        </div>
    )
}
