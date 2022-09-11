import React from 'react'
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
    return (
        <div className='main'>
            <nav className="navbar navbar-light bg-dark justify-content-between">
                <Link to="/" className="navbar-brand mx-2">FreeCode<span>BootCamp</span> </Link>
                <form className="form-inline">
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Menu</button>
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-2 color-a" type="submit">
                        <Link to="/login">
                            Sign up
                        </Link>
                    </button>
                </form>
            </nav>


        </div>
    )
}

export default Header