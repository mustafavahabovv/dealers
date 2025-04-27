import {createRoot} from 'react-dom/client'
import Router from "./router/Router.jsx";
import {StrictMode} from "react";
import './lib/global';
import "./styles/custom.css"
import store from './store/store.js';
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </StrictMode>
);
