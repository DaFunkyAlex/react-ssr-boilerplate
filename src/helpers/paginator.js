import React from 'react'
import PropTypes from 'prop-types'

/**
 * Class Paginator
 *
 * @author Alexander Jungwirth
 */
class Paginator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalItems: 0,
            pageCount: Math.ceil(this.props.totalItems / this.props.itemsPerPage),
            activePage: this.props.activePage || 1,
            pageRangeDisplayed: props.pageRangeDisplayed || 5,
        };

        this.break = '...';
        this.changePage = this.changePage.bind(this);

    }

    /**
     * handles changes of property edition (refer to Main)
     *
     * @param nextProps
     * @param prevState
     * @returns {*}
     */
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.totalItems !== prevState.totalItems) {
            return {
                totalItems: nextProps.totalItems,
            };
        }
        return null;
    }

    /**
     * get death notices on change of edition property
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.totalItems !== this.state.totalItems) {
            this.setState({pageCount: Math.ceil(this.state.totalItems / this.props.itemsPerPage)});
        }
    }

    /**
     * create the buttons for the paginator
     *
     * @returns {Array}
     */
    listItems() {

        let items = [];

        let leftSide = this.state.pageRangeDisplayed / 2;
        let rightSide = this.state.pageRangeDisplayed - leftSide;

        if (this.state.pageCount <= this.state.pageRangeDisplayed) {
            for (let pageNumber = 1; pageNumber <= this.state.pageCount; pageNumber++) {
                items.push(this.createListItem(pageNumber));
            }
        } else {

            let breakView = void 0;

            for (let pageNumber = 1; pageNumber <= this.state.pageCount; pageNumber++) {
                if (pageNumber <= this.state.pageRangeDisplayed) {
                    items.push(this.createListItem(pageNumber))
                    continue;
                }

                if (pageNumber > this.state.pageCount - this.state.pageRangeDisplayed) {
                    items.push(this.createListItem(pageNumber));
                    continue;
                }

                if (pageNumber >= this.state.activePage - leftSide && pageNumber <= this.state.activePage + rightSide) {
                    items.push(this.createListItem(pageNumber));
                    continue;
                }

                if (items[items.length - 1] !== breakView) {
                    breakView = this.createBreakItem(pageNumber);
                    items.push(breakView);
                }

            }
        }


        return items
    }

    /**
     * create page button
     *
     * @param pageNumber
     */
    createListItem(pageNumber) {
        return <li key={pageNumber} onClick={() => {
            this.props.onPageChange(pageNumber);
            this.setState({activePage: pageNumber})
        }} className={(this.state.activePage === pageNumber) ? 'active' : ''}> {pageNumber} </li>
    }

    /**
     * create the break item (the funky dots)
     *
     * @param pageNumber
     * @returns {*}
     */
    createBreakItem(pageNumber) {
        return <li className="break" key={pageNumber}>...</li>
    }

    /**
     * set state for active page and execute callback method
     *
     * @param pageNumber
     */
    changePage(pageNumber) {
        this.setState(
            {activePage: pageNumber},
            this.props.onPageChange(pageNumber)
        );
    }

    /**
     * render method
     *
     * @returns {*}
     */
    render() {

        if (this.state.pageCount <= 1) {
            return false;
        } else {
            return (
                <ul className='paginator'>
                    {!this.props.hideFinalArrows &&
                    <li onClick={() => this.changePage(1)}> &laquo; </li>
                    }

                    {!this.props.hideNavigationArrows && this.state.activePage !== 1 &&
                    <li onClick={() => this.changePage(this.state.activePage - 1)}> &lsaquo; </li>
                    }

                    {this.listItems()}

                    {!this.props.hideNavigationArrows && this.state.activePage !== this.state.pageCount &&
                    <li onClick={() => this.changePage(this.state.activePage + 1)}> &rsaquo; </li>
                    }

                    {!this.props.hideFinalArrows &&
                    <li onClick={() => this.changePage(this.state.pageCount)}> &raquo; </li>
                    }
                </ul>
            );
        }

    }

}

Paginator.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    hideFinalArrows: PropTypes.bool,
    hideNavigationArrows: PropTypes.bool,
    activePage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
};

export default Paginator;
