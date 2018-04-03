import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './search.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../../actions/search';

class SearchComponent extends React.Component {

    static propTypes = {
        search: PropTypes.func.isRequired,
        searchText: PropTypes.string.isRequired,
    }

    state = {
        text: '',
    }

    componentWillMount() {
        this.setState({
            text: this.props.searchText,
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchText !== this.props.searchText) {
            this.setState({
                searchText: nextProps.searchText,
            })
        }
    }

    render() {
        return (
            <div styleName="search">
                <input
                    styleName="searchInput"
                    value={this.state.text}
                    onChange={this.onInput}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    styleName="searchButton"
                    onClick={this.onSearchClick}
                >
                    Search
                </button>
            </div>
        )
    }

    onInput = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.text);
        }
    }

    onSearchClick = () => {
        this.props.search(this.state.text);
    }

}

const SearchStyled = CSSModules(SearchComponent, styles);

const mapStateToProps = state => {
    return {
        searchText: state.searchFilter.text
    }
};

const mapDispatchToProps = dispatch => {
    return {
        search: text => {
            dispatch(search(text));
        }
    }
};

export const Search = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchStyled);
