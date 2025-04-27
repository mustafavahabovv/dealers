import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Contact from "../pages/contact/Contact.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
