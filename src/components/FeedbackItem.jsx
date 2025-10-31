import React from 'react'
import Card from './share/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedBackContext from '../context/FeedBackContext.jsx';


// itemSent က FeedbackList ကနေ ပို့လာတဲ့ item ဖြစ်ပါတယ်။
function FeedbackItem({ itemSent }) {

    const { deleteFeedback, editFeedback } = React.useContext(FeedBackContext);


    return (
        <Card>
            <div className='num-display'>{itemSent.rating}</div>
            <div className='text-display'>{itemSent.text}</div>
            <button onClick={() => deleteFeedback(itemSent.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(itemSent)}>
                <FaEdit color='purple' />
            </button>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

export default FeedbackItem
