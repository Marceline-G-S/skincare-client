import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar pb-10">     
            {(localStorage.getItem("auth_token") !== null) ?
            <il className="navbar pb-10">
            <li className="navbar__item pl-10">
                <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/home"}>Homepage</NavLink>
            </li>
            <li className="navbar__item pl-10">
                <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/skintype"}>Skintype</NavLink>
            </li>
            <li className="navbar__item pl-10">
                <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/concerns"}>Concerns</NavLink>
            </li>
            <li className="navbar__item pl-10">
                <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/journal"}>Journal</NavLink>
            </li> 
                <li className="navbar__item pl-10">
                    <button className="underline text-blue-600 hover:text-purple-700"
                        onClick={() => {
                            localStorage.removeItem("auth_token")
                            navigate('/login')
                        }}
                    >Logout</button>
                </li> 
            </il>
            :

            <ul className="navbar pb-10">
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/home"}>Homepage</NavLink>
                </li>
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/skincare-overview"}>Skincare overview</NavLink>
                </li>
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/five-steps-of-skincare"}>Steps of skincare</NavLink>
                </li>
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/build-routine"}>Building a routine</NavLink>
                </li>            
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/track-routine"}>Tracking a routine</NavLink>
                </li> 
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/login"}>Login</NavLink>
                </li>
                <li className="navbar__item pl-10">
                    <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/register"}>Register</NavLink>
                </li> 
            </ul>
            }        
        </ul>
    )
}