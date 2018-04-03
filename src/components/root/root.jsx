import React from 'react';
import { Search } from '../search/search';
import CSSModules from 'react-css-modules';
import styles from './root.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader } from '../loader/loader';
import { SearchResults } from '../searchResults/searchResults';
import { loadDataFromStorage } from '../../actions/search';

class RootComponent extends React.Component {

    componentWillMount() {
        this.props.loadDataFromStorage();
    }

    render() {
        return (
            <div styleName="root">
                {this.props.isLoading && <Loader />}
                <Search />
                <SearchResults />
            </div>
        )
    }

}

RootComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

const RootStyled = CSSModules(RootComponent, styles);

const mapStateToProps = state => {
    return {
        isLoading: state.searchResults.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDataFromStorage: () => dispatch(loadDataFromStorage()),
    }
}

export const Root = connect(mapStateToProps, mapDispatchToProps)(RootStyled);
