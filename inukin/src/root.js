import React from 'react';
import thunk from 'redux-thunk';
import Navigation from './navigation/Navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/store';
const store = createStore(allReducers, applyMiddleware(thunk))
console.disableYellowBox = true;
const Root = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export default Root;
