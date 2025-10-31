

import FeedbackItem from './FeedbackItem.jsx'

import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedBackContext from '../context/FeedBackContext.jsx';


// ပို့လိုက်တဲ့ဒေတာကို ယူပြီး FeedbackItem component ကို map လုပ်ပေးထားတာဖြစ်ပါတယ်။
function FeedbackList() {

    const { feedBack, editFeedback } = useContext(FeedBackContext);


    if (!feedBack || feedBack.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (

        <div className='feedback-list'>
            <AnimatePresence>
                {feedBack.map((itemList) => (
                    <motion.div
                        className="feedback-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={itemList.id}
                    >
                        <FeedbackItem key={itemList.id}
                            itemSent={itemList}
                        />
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



export default FeedbackList
