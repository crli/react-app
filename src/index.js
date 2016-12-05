import './libs/js/flexible.js';
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import route from './js/route/route';
import store from './js/store/store';

import './libs/css/normalize';
import 'indexcss'; 
import './font/iconfont.css'; 

store.subscribe(function () {
    // console.log(store.getState())
})

ReactDOM.render(
    <Provider store = {store}>
        {route}
    </Provider>,
    document.getElementById("app")
)