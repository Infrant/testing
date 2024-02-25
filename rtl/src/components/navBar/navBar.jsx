import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={'/'} data-testid={'main-page-link'}>
                main
            </Link>
            <Link to={'/about'} data-testid={'about-page-link'}>
                about
            </Link>
            <Link to={'/users'} data-testid={'users-page-link'}>
                users
            </Link>
        </div>
    );
};

export default NavBar;