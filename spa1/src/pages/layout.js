import {Outlet,Link} from "react-router-dom"
import '../App.css'
const layout = ()=>{
    return (
        <nav className="layout">
            <Link className="home head" to ="/home">Home</Link>
            <Link className="user head" to="/user">User</Link>
            <Link className="about head" to="/about">About Me</Link>
            <Link className="blogs head"to="/blogs">Blogs</Link>
            <Outlet></Outlet>
        </nav>
    )
};
export default layout;