import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function NavBar(){
    return (
        <header className="bg-yellow-400">
            <div className="container mx-auto flex justify-between ">
                <nav className="flex">
                    <NavLink to="/" 
                    activeClassName="text-white"
                    exact className="inflex-flex items-center py-6 px-3 mr-4 text-green-600 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Mohammad
                    </NavLink>
                    <NavLink to="/about" 
                    activeClassName="text-red-100 bg-green-500"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-green-800">
                        About me!
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName="text-red-100 bg-green-500"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                    activeClassName="text-red-100 bg-green-500"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-green-800">
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://github.com/MohammadHamieh/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height:35, width:35}}
                    />
                     <SocialIcon 
                        url="https://linkedin.com/in/mohammad-hamieh-01b866137"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height:35, width:35}}
                    />
                </div>
            </div>
        </header>
    )
}