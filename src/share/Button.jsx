import React from 'react';
import PropTypes from "prop-types";

function Button(props) {

    const buttonProps = {...Button.defaultProps, ...props};
    const {children, version, type, isDisabled} = buttonProps;

    return (
        <button type={type} disabled={isDisabled}   className = {`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;