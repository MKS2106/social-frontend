import { NavLink, Link} from "react-router-dom"
function NavBar(){
    return(
        <nav className="flex gap-5 mx-auto mb-6">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/signin'>SignIn</NavLink>
        </nav>
    )
}
export default NavBar