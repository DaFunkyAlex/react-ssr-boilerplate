import React from 'react';
import Head from './Layout/Head';
import StylesLoaded from "../hoc/StylesLoaded";

class Home extends React.Component {

    render() {
        return (
            <StylesLoaded>
                <Head title="React Boilerplate • Home"/>
                <div>
                    <h1>React Boilerplate</h1>
                    <p>Welcome to React Boilerplate</p>
                </div>
            </StylesLoaded>
        )
    }

}

export default Home;
