import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Mohammad
                    </NavLink>
                    <NavLink to="/about">
                        About me!
                    </NavLink>
                    <NavLink to="/post" >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}