import React from 'react';
import moment from 'moment';
import styler from "../../helpers/styler";

const getYear = () => {
    return moment().year();
};

const Footer = (props) => {
    return (
        <div className={styler(["footer"])}>&copy; {getYear()}. All rights reserved.</div>
    );
};

export default Footer