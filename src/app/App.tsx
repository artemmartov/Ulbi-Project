import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/main' element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;