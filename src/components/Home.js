import React from 'react'
import image from "../49608.jpg"
export default function Home(){
    return (
        <main className="shadow-inner">
            <img src={image} 
            alt="michel-angelo" 
            className="absolute object-cover w-full h-full"/>
            <section className=" relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <div style={{ border:"1px solid white",borderRadius:"20px",height: "350px", width: "500px",backgroundColor:"white", opacity:"0.6"}}>
               <h1 style={{zIndex:1, position:"relative"}} className=" bg-clip-text bg-white text-6xl text-green-800 font-bold  cursive leading-none lg:leading-snug home-name"> 
               What walks on four feet in the morning, two in the afternoon and three at night? </h1>
            </div>
            </section>
        </main>
    )
}