import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
