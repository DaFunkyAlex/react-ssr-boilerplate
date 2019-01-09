import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Fade extends React.Component {

    render() {
        return (
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={300}
                >
                    {this.props.children}
                </ReactCSSTransitionGroup>
        );
    }
}

export default Fade;