import React from 'react';
import PropTypes from "prop-types";

function FeedBackStats({feedBacktoStats}) {

    let average = feedBacktoStats.reduce((acc,cur) => {
        return acc + cur.rating
    },0 ) / feedBacktoStats.length;

    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className='feedback-stats'>
            <h4>{feedBacktoStats.length} Reviews</h4>
            <h4>Average Rating: {
                isNaN(average) ? 0 : average
            }</h4>
        </div>
    );
}

FeedBackStats.propTypes = {
    feedBacktoStats: PropTypes.array.isRequired,
}

export default FeedBackStats;