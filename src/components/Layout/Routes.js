import React from 'react';
import universal from 'react-universal-component';
import {Route, Switch} from 'react-router';
import {RedirectWithStatus} from '../../helpers/RedirectStatus';

import PageNotFound from '../../errors/PageNotFound/PageNotFound';
import styler from "../../helpers/styler";


const UniversalComponent = universal(props => import(`../../components/${props.page}`), {
    loading: () => <div>Loading...</div>,
    ignoreBabelRename: true,
});

export default ({staticContext}) => (
    <div className={styler(["main"])}>
        <Switch>
            <Route exact path="/" render={routeProps => <UniversalComponent page="Home" {...routeProps} />} />
            <Route exact path="/article" render={routeProps => <UniversalComponent page="Article" {...routeProps} />} />

            <RedirectWithStatus status={301} from="/redirect" to="/"/>

            <Route path="*" status={404} component={PageNotFound}/>

        </Switch>
    </div>

);
