// import {useEffect, useState} from "react";
//
// import './App.css';
// import {Users} from "./users/users";
//
// function App() {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [inputValue, setInputValue] = useState('')
//
//     const handleToggle = () => setToggle(prev => !prev)
//
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//
//     return (
//         <div className="App">
//             {data && <div style={{color: 'green'}}>data</div>}
//             <h1>Title</h1>
//             <button onClick={handleToggle} data-testid={'toggle-btn'}>click</button>
//             <input
//                 type="text"
//                 placeholder={'text input1'}
//                 data-testid={'input-elem'}
//                 value={inputValue}
//                 onChange={e => setInputValue(e.target.value)}
//             />
//             {toggle && <div data-testid={'toggle-div'}>Toggle div</div>}
//             <div data-testid={'input-value-elem'}>{inputValue}</div>
//             <Users/>
//         </div>
//     );
// }
//
// export default App;

import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./pages/mainPage";
import AboutPage from "./pages/aboutPage";
import ErrorPage from "./pages/errorPage";
import {Users} from "./users/users";
import UserDetailsPage from "./pages/userDetailsPage";
import AppRouter from "./router/AppRouter";
import NavBar from "./components/navBar/navBar";

const App = () => {
    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>

    );
};

export default App;
