import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './containers/AppRoot';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './store/reducers';
import moment from 'moment';
import 'moment/locale/de';
import TagManager from 'react-gtm-module';
import './helpers/icons';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(
    applyMiddleware(thunk)
));

const tagManagerArgs = {gtmId: 'GTM-XXXXXX'};
TagManager.initialize(tagManagerArgs);

moment.locale('de');

class Index extends React.Component {

    state = {
      loading: true
    };

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        } else {
            return (
                <Provider store={store}>
                    <AppRoot/>
                </Provider>
            )
        }
    }
};

ReactDOM.render(<Index/>, document.getElementById('react-root'));
