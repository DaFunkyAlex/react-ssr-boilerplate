import React from 'react';
import LoadingSpinner from "../assets/images/loading.svg";

/**
 * waits for a head style class to be loaded
 * this is a workarround: when using lazyload and sst, javascript is loaded before stylesheets (ugly stuff for half a second)
 *
 * @author Alexander Jungwirth
 * @version 1.0.0.0
 */

class StylesLoaded extends React.Component {

    state = {
        loaded: false
    };

    componentDidMount() {
        this.headStylesLoaded('main_wrapper', 50);
    }

    /**
     * checks all style tags in head for a
     *
     * @param style
     * @param interval
     * @returns {boolean}
     */
    headStylesLoaded = (style, interval) => {
        let found = false;
        if (!found) {
            let headStyles = document.head.getElementsByTagName('style');
            let re = new RegExp(style, "g");

            for (let index in headStyles) {
                let styleText = headStyles[index].innerText;
                if (typeof styleText !== 'undefined') {
                    if (re.test(styleText)) {
                        this.setState({loaded: true});
                        return true;
                    }
                }
            }

        } else {
            let self = this;
            setTimeout(function () {
                self.headStylesLoaded(style, interval);
            }, interval);
        }
    };

    render() {
        if (!this.state.loaded) {
            return (
                <div>
                    <div style={{width: '100%', height:'100%', textAlign: 'center'}}>
                        <img src={LoadingSpinner} />
                    </div>
                </div>
            )
        } else {
            return (
                this.props.children
            )
        }

    }

}

export default StylesLoaded;