import React from 'react'
import Card from '../share/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

// itemSent က FeedbackList ကနေ ပို့လာတဲ့ item ဖြစ်ပါတယ်။
function FeedbackItem({ itemSent , handleDelete }) {



    return (
        <Card>
            <div className='num-display'>{itemSent.rating}</div>
            <div className='text-display'>{itemSent.text}</div>
            <button onClick={()=>handleDelete(itemSent.id)} className='close'>
                <FaTimes color='purple' />
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
