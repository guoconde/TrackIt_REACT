import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import Habits from "../Habits/Main";
import Today from "../Habits/Today";
import History from "../Habits/History";

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
                <Route path='/hoje' element={<Today />} />
                <Route path='/historico' element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}