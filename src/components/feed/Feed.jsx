import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData'

export default function Feed() {
    return (
        <div className='feed'>
            <div className='feed-wrapper'>
                <Share></Share>

                {Posts.map((p) => (
                    <Post key={p.id} post={p}></Post>
                ))}               
            </div>
        </div>
    )
}
