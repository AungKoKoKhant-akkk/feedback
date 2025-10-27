
import FeedbackData from '../data/FeedbackData'
import FeedbackItem from './FeedbackItem.jsx'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion";


// ပို့လိုက်တဲ့ဒေတာကို ယူပြီး FeedbackItem component ကို map လုပ်ပေးထားတာဖြစ်ပါတယ်။
function FeedbackList({ feedBackSent, handleDeletefromAppJsx }) {

    if (!feedBackSent || feedBackSent.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (

        <div className='feedback-list'>
            <AnimatePresence>
                {feedBackSent.map((itemList) => (
                    <motion.div
                        className="feedback-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={itemList.id}
                    >
                        <FeedbackItem key={itemList.id}
                            itemSent={itemList}
                            handleDelete={handleDeletefromAppJsx} />
                    </motion.div>

                ))}
            </AnimatePresence>


        </div >

        // <div className='feedback-list'>

        //     {feedBackSent.map((itemList) => (
        //         <FeedbackItem key={itemList.id}
        //                       itemSent={itemList}
        //                       handleDelete={handleDeletefromAppJsx}/>
        //     ))}

        // </div >
    )
}

FeedbackList.propTypes = {
    feedBack: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
}

export default FeedbackList
