import React, {Fragment} from 'react';
import Head from '../../components/Layout/Head';
import {Status} from '../../helpers/Status';
import Fade from '../../helpers/Fade';
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <Fragment>
            <Head title="React SSR Boilerplate • Not Found"/>
            <Status code={404}/>
            <Fade>
                <div>
                    <div>
                        <h1>404 - Page Not Found</h1>
                    </div>
                    <p>We're sorry, but this page does not exists. Please start from our <Link to="/">Homepage</Link> or use the navigation.</p>
                </div>
            </Fade>
        </Fragment>
    );
}

export default PageNotFound;
