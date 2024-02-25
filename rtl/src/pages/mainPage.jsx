import React from 'react';
import Counter from "../components/counter/counter";

const MainPage = () => {
    return (
        <div data-testid={'main-page'}>
            Main Page
            <Counter/>
        </div>
    );
};

export default MainPage;