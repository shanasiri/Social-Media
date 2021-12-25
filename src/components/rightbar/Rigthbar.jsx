import React from 'react'
import './rightbar.css'
import { Cake } from '@mui/icons-material';
import { Users } from '../../dummyData'
import Online from '../online/Online';

export default function Rigthbar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday-container">
                    <Cake className='birthday-icon'></Cake>
                    <span className='birthday-text'><b>Shanaka Asiri and 3 others </b> have a birthday today.</span>
                </div>

                <div className='online-friends'>
                    <h3 className='online-title'>Online Friends</h3>
                    <ul className='online-firedList'>
                        {Users.map(u => (
                            <Online key={u.id} user={u}></Online>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <div className='user-info'>
                    <h4 className='rightbar-title'>User Information</h4>

                    <div className='rightbar-info'>
                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>City:</span>
                            <span className='rightbar-infoValue'>Kegalle</span>
                        </div>

                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>From:</span>
                            <span className='rightbar-infoValue'>Sri Lanka</span>
                        </div>

                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>Relationship:</span>
                            <span className='rightbar-infoValue'>Single</span>
                        </div>
                    </div>
                </div>
                

                <h4 className='rightbar-title'>User Friends</h4>

                <div className='rightbar-followings'>
                    <div className='rightbar-following'>
                        <img src="./images/user/2.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Nilupul Manodya</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src="./images/user/3.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Randika Chathuranga</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src="./images/user/4.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Keshan Sankalpa</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src="./images/user/5.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Keshan Sankalpa</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src="./images/user/6.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Keshan Sankalpa</span>
                    </div>

                    <div className='rightbar-following'>
                        <img src="./images/user/9.jpg" alt="" className='rightbar-followingImg' />
                        <span className='rightbar-followingName'>Keshan Sankalpa</span>
                    </div>
                </div> 
            </>
            
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbar-wrapper">
                {profile ? <ProfileRightbar></ProfileRightbar> : <HomeRightbar></HomeRightbar>}
            </div>
        </div>
    )
}
