
// NavBar.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center w-full">
                <span className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </span>
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                {(localStorage.getItem("auth_token") !== null) ? (
                    <>
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
                        <li className="hidden md:flex">
                            <button className="underline text-blue-600 hover:text-purple-700 px-4" onClick={() => {
                                localStorage.removeItem("auth_token");
                                navigate('/login');
                            }}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/home">Homepage</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/skincare-overview">Skincare overview</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/five-steps-of-skincare">Steps of skincare</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/build-routine">Building a routine</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/track-routine">Tracking a routine</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/login">Login</NavLink>
                        </li>
                        <li className="hidden md:flex">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700 px-4" to="/register">Register</NavLink>
                        </li>
                    </>
                )}
                </ul>
            </div>
        </nav>
    );
};
