import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './containers/AppRoot';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './store/reducers';
import './helpers/icons';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(
    applyMiddleware(thunk)
));


const Index = () => {
    return (
        <Provider store={store}>
            <AppRoot/>
        </Provider>
    )
};

ReactDOM.render(<Index/>, document.getElementById('react-root'));
