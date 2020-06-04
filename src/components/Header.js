import React from 'react'
import {link} from 'react-router-dom'

const Header = props => {
    return (
        <nav>
            <h1>Welcome to Twitumrechan™</h1>
            <div>
                <link to='/dashboard'>Dashboard</link>
                <link to='/profile'>Profile</link>
            </div>
        </nav>
    )
}

export default Header