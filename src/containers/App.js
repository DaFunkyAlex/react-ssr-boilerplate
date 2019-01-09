import React from 'react';
import Routes from "../components/Layout/Routes";
import Navigation from "../components/Layout/Navigation";
import Header from "../components/Layout/Header";
import Footer from '../components/Layout/Footer';
import styler from "../helpers/styler";

const dashboardName = 'React Admin Dashboard';
const menuItems = [
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/'
    },
    {
        label: 'Blog',
        icon: 'comment-dots',
        link: '/blog'
    },
    {
        label: 'Mitglieder',
        icon: 'users',
        submenu: [
            {
                label: 'Übersicht',
                link: '/members/list',
            },
            {
                label: 'Status',
                link: '/members/status'
            },
            {
                label: 'Beiträge',
                link: '/members/fees'
            },
            {
                label: 'Funktionen',
                link: '/members/functions'
            },
            {
                label: 'Abteilungen',
                link: '/members/departments'
            },
            {
                label: 'Attribute',
                link: '/members/attributes'
            },
            {
                label: 'Import',
                link: '/members/import'
            },
        ]
    },
    {
        label: 'Finanzen',
        icon: 'euro-sign',
        submenu: [
            {
                label: 'Übersicht',
                link: '/finances/list',
            },
        ]
    }
];
const companyName = 'My Funky Company';

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