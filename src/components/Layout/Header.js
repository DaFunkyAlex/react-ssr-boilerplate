import React, {Component} from 'react';
import {connect} from 'react-redux';
import styler from '../../helpers/styler';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Header extends Component {

    state = {
        showUserMenu: false,
    };

    render() {
        return (
            <div className={styler(["header"])}>
                <div className={styler(["flex", "flex-end", "flex-align-center", "width-1-1"])}>
                    <div className={styler(["margin-small-right"])}>
                        <FontAwesomeIcon icon={'bell'}/>
                        <sup>8</sup>
                    </div>

                    <div className={styler(["user-area", "position-relative"])}>
                        <img src="https://placehold.it/30x30" alt="Avatar" className={styler(["margin-small-right"])}/>
                        <a href="#" onClick={() => {
                            this.setState({showUserMenu: !this.state.showUserMenu})
                        }}> {this.props.auth.user.first_name} {this.props.auth.user.last_name} <FontAwesomeIcon icon="caret-down"/></a>

                        {this.state.showUserMenu &&
                        <div className={styler(["user-menu"])}>
                            <ul>
                                <li><span className={styler(["margin-small-right"])}><FontAwesomeIcon icon={"user"}/></span> Profile</li>
                                <li><span className={styler(["margin-small-right"])}><FontAwesomeIcon icon={"cog"}/></span> Settings</li>
                                <li><span className={styler(["margin-small-right"])}><FontAwesomeIcon icon={"envelope"}/></span> Messages</li>
                                <hr/>
                                <li><span className={styler(["margin-small-right"])}><FontAwesomeIcon icon={"power-off"}/></span> Logout</li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(Header);
