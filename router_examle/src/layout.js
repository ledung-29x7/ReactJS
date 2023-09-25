import {Outlet, Link } from "react-router-dom";
import './App.css';


 function layout(){
    return(
            <nav className="nav">
                
                <Link className="nav_tag" to="/home">Home</Link>
                <Link className="nav_tag" to="/user">User</Link>
                <Link className="nav_tag" to="/about">About</Link>
                <Outlet></Outlet>
            </nav>
    )
}
export default layout;