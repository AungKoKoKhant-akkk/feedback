
import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    // Manually apply defaultProps for React 19 compatibility
    const finalProps = { ...Card.defaultProps, ...props }
    const { children, reverse } = finalProps

    return (
        <div className={`card ${reverse ? 'reverse' : ''}`}>
            {children}
        </div>

        // <div className='card' style={{
        //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        //     color: reverse ? '#fff' : '#000'
        // }}>


        //     {children}
        // </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
