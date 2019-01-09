import React, {Component} from 'react';
import {connect} from 'react-redux';
import AnimateHeight from 'react-animate-height'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from '../../assets/scss/style.scss'
import {bindActionCreators} from "redux";
import {navigationAction} from '../../store/actions'

class Navigation extends Component {

    state = {
        menu: this.props.navigation,
    };

    /**
     * initial method calls
     */
    componentDidMount() {
        this.props.navigationAction();
    }

    /**
     * update state when navigationAction finished
     *
     * @param nextProps
     * @param prevState
     * @returns {*}
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.navigation.items !== prevState.menu) {
            return {
                menu: nextProps.navigation.items
            }
        } else {
            return null;
        }
    }

    /**
     * add or remove 'open' class to/from parentNode
     *
     * @param event
     * @param index
     */
    toggleClass = (event, index) => {
        const target = event.currentTarget;
        const open = (target.parentNode.classList.contains(styles.open));
        const menu = {...this.state.menu};

        // remove the "open" class from any menu item
        target.parentNode.parentNode.childNodes.forEach((node) => {
            if (node.classList.contains(styles.open)) {
                node.classList.remove(styles.open);
            }
        });

        // collapse any menu item
        for (let item in menu) {
            if (menu[item].hasOwnProperty('submenu')) {
                menu[item].submenuOpened = false;
            }
        }

        // open or close submenu
        if (!open) {
            target.parentNode.classList.add(styles.open);
            menu[index].submenuOpened = true;

        } else {
            target.parentNode.classList.remove(styles.open);
            menu[index].submenuOpened = false;

        }

        // overwrite menu state
        this.setState({
            menu: menu
        })

    };


    /**
     * render method
     *
     * @returns {*}
     */
    render() {

        let menu = null;
        if (typeof this.state.menu !== 'undefined' && this.state.menu.length > 0) {
            menu = this.state.menu.map((item, index) => {

                return (
                    <li key={index}>
                        {(item.hasOwnProperty('link')) ? (
                            <NavLink
                                exact to={item.link}
                                activeClassName={styles.active}
                                onClick={(event) => {
                                    this.toggleClass(event, index);
                                }}
                            >
                                <FontAwesomeIcon icon={item.icon} className={styles.icon}/>{item.label}
                            </NavLink>
                        ) : (

                            <>
                                <a href="#" onClick={(event) => {
                                    this.toggleClass(event, index);
                                    item.submenuOpened ? console.log('auto') : console.log(0);
                                }}>
                                    <FontAwesomeIcon icon={item.icon} className={styles.icon}/>
                                    <span>{item.label}</span>
                                    <FontAwesomeIcon icon={"chevron-right"} className={[styles.icon, styles.arrow].join(' ')}/>
                                </a>
                                <AnimateHeight duration={500} height={item.submenuOpened ? 'auto' : 0}>
                                    <ul className={styles["sub-menu"]}>
                                        {item.submenu.map((subitem, index) => {
                                            return <li key={index}><NavLink to={subitem.link} activeClassName={styles.active}>{subitem.label}</NavLink></li>
                                        })}
                                    </ul>
                                </AnimateHeight>
                            </>
                        )}
                    </li>
                )
            });
        }

        return (
            <aside className={styles.menu}>
                <div className={styles.brand}>React Boilerplate</div>
                <nav>
                    <ul className={styles["nav-menu"]}>
                        {menu}
                    </ul>
                </nav>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        navigationAction: navigationAction,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);