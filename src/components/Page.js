import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Content from './Content';
import {MainContainer} from './layout/PageElements';
import About from './About';

function Page() {
    return (
        <Router>
            <MainContainer >
                <NavBar />
                <Content />
                <About />
            </MainContainer>
        </Router>
    )
}

export default Page
