import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/mainPage";
import AboutPage from "../pages/aboutPage";
import {Users} from "../users/users";
import UserDetailsPage from "../pages/userDetailsPage";
import ErrorPage from "../pages/errorPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;