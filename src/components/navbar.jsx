import React from 'react'
import { Link } from "react-router-dom"
import Tube from "../img/tube.png"
import Tele from "../img/tele.png"
const Navbar = () => {
    return (
        <nav>
            <h1><span>L</span>ogo</h1>
            <div className="link">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/newPost">New Post</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/sport">Sport</Link>
                    <Link to="/library">Library</Link>
                    <Link to="/fotos">Fotos</Link>
                    <Link to="/movies">Movies</Link>
                </div>
                <a className="t" href="https://web.telegram.org/"><img src={Tele} alt="" /></a>
                <a className="y" href="https://www.youtube.com/"><img src={Tube} alt="" /></a>
            </div>
        </nav>
    );
}
export default Navbar;