import React from 'react';
import Routes from "../components/Layout/Routes";
import Navigation from "../components/Layout/Navigation";
import Header from "../components/Layout/Header";
import Footer from '../components/Layout/Footer';
import styler from "../helpers/styler";

const App = () => {
    return (
        <div className={styler(["main_wrapper"])}>
            <Header/>
            <Navigation/>
            <Routes/>
            <Footer/>
        </div>
    )
};

export default App;