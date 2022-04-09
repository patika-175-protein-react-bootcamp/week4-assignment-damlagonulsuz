/* eslint-disable linebreak-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import Questions from '../pages/Questions';
import FinalPage from '../pages/FinalPage';


function Router() {
    return(
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path='/Questions' element={<Questions />}/>
            <Route path="/finalPage" element={<FinalPage />} />
        </Routes>

    );
    
}

export default Router;
