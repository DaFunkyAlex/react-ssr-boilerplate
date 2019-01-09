import styles from '../assets/scss/style.scss';

const styler = (styleArray) => {
    let styleString = '';
    styleArray.forEach((style) => {
        styleString += styles[style] + ' ';
    });
    return styleString;
}

export default styler;