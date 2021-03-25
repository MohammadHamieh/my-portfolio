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
                    <NavLink to="/about" exact>
                        About me!
                    </NavLink>
                    <NavLink to="/post" exact>
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" exact>
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}