import React from 'react'
import { Link } from 'react-router-dom'
import {RiMenuLine} from "react-icons/ri"
import Logo from "../images/logo.svg"

const NavBar = () => {


    return (
    <nav className="flex w-screen">
        <div className="pl-14 py-4 justify-start">
            <img src={Logo} alt="logo"/>
        </div>
        <div className="px-auto py-6 pl-14 sm:invisible md:visible">
            <Link to="/" className="mr-6"><span className="font-bold">Home</span></Link>
            <Link to="/rooms"><span className="font-bold">Rooms</span></Link>
        </div>
        <div className="py-4 text-3xl sm:visible md:invisible justify-end ml-auto mr-2">
            <button>
                <RiMenuLine />
            </button>
        </div>
        
    </nav>
    )
}

export default NavBar
