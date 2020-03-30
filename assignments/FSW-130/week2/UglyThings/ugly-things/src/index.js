import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeContextProvider} from "./themeContext"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
