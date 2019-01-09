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
                        <h1>Seite nicht gefunden</h1>
                    </div>
                    <p>Liebe Besucherin, lieber Besucher,</p>
                    <p>Die angegebene Seite konnte nicht dargestellt werden. Kontrollieren Sie bitte die angegebene URL auf eventuelle Schreibfehler oder gehen Sie auf die <Link to="/">Startseite</Link> und verwenden
                        Sie die Navigation.</p>
                </div>
            </Fade>
        </Fragment>
    );
}

export default PageNotFound;
