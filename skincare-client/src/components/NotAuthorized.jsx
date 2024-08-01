import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar.jsx"

export const NotAuthorized = () => {
    return <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
}
