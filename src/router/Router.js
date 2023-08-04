import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "../pages/MainPage";
import Autoplay from "../pages/Autoplay";
import Test from "../pages/Test"

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/autoplay' element={<Autoplay />} />
            <Route path='/start' element={<Test />}/>
        </Routes>
    )
}

export default Routers