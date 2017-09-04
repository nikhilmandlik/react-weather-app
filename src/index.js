import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

const createtoreWithStoreMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDom.render(
    <Provider store={createtoreWithStoreMiddleware(reducers)}>
        <App />
    </Provider>,
    document.querySelector('.container')
);
