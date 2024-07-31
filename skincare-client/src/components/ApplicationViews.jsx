import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { SkinTypeSelector } from '../pages/skintype.jsx'


export const ApplicationViews = () => {
    const [rocksState, setRocksState] = useState([])

    const fetchRocksFromAPI = async (showAll) => {        
        const response = await fetch(url,
            {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
                }
            })
    }

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/skintype" element={<SkinTypeSelector />} />
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
}