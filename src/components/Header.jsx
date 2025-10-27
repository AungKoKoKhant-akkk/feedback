import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    // Manually apply defaultProps for React 19 compatibility
    const finalProps = { ...Header.defaultProps , ...props};

    return (
        <header>
            <div className="container">
                <h1>{finalProps.text}</h1>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: 'Welcome to My App',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header;