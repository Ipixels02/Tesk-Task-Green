import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {Provider} from "react-redux";
import {setupStore} from "./shared/services/store/store";
import {BrowserRouter} from "react-router-dom";

const store = setupStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
