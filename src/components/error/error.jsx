import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './error.css';
import PropTypes from 'prop-types';

const ErrorComponent = ({ error } = props) => {
    return (
        <div styleName="error">
            <div styleName="errorText">
                {error}
            </div>
        </div>
    )

}

ErrorComponent.propTypes = {
    error: PropTypes.string,
}

export const Error = CSSModules(ErrorComponent, styles);
