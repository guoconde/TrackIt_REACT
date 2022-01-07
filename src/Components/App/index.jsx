import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import Habits from "../Habits/Main";

import { ResetStyle } from '../../assets/css/reset'
import { GlobalStyle } from '../../assets/css'

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/habitos' element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}