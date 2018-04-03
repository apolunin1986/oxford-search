import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './loader.css';

const LoaderComponent = () => {
    return (
        <div styleName="wrapper">
            <div styleName="loader" />
        </div>
    )

}

export const Loader = CSSModules(LoaderComponent, styles);
