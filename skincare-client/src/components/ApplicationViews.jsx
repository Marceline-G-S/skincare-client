import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { SkinTypeSelector } from '../pages/skintype.jsx'
import { SkinConcernSelector } from "../pages/concerns.jsx"


export const ApplicationViews = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/home" element={<Home />} />
                <Route path="/skintype" element={<SkinTypeSelector />} />
                <Route path="/concerns" element={<SkinConcernSelector />} />
            </Route>
        </Routes>
    </BrowserRouter>
}