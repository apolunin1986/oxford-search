import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './searchResults.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Error } from '../error/error';

const SearchResultsComponent = ({ results, error } = props) => {
    return (
        <div styleName="searchResults">
            {error && <Error error={error} />}
            {!error && results.map(getWordElement)}
        </div>
    )

}

function getWordElement(word, index) {
    return (
        <div
            styleName="wordListElement"
            key={index}
        >
            {word}
        </div>
    )
}

SearchResultsComponent.propTypes = {
    results: PropTypes.array.isRequired,
    error: PropTypes.string,
}

const SearchResultsStyled = CSSModules(SearchResultsComponent, styles);

const mapStateToProps = state => {
    return {
        results: state.searchResults.results,
        error: state.searchResults.error,
    }
}

export const SearchResults = connect(mapStateToProps)(SearchResultsStyled);
