import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login";
import { ResetStyle } from '../assets/css/reset.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}