import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {

    const [feedBack, setFeedBack] = useState([
        {

            id: 1,
            text: "This is a testing feedback",
            rating: 10
        },
        {
            id: 2,
            text: "This is second testing feedback",
            rating: 9
        }
    ]);

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    });

    // Delete Feedback Item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedBack(feedBack.filter((items) => items.id !== id));
        }
    }

    // Add Feedback Item
    const dataAdd = (newFeedBackData) => {
        newFeedBackData.id = uuidv4();
        setFeedBack([newFeedBackData, ...feedBack]);
    }

    // Edit Feedback Item
    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        });
    }

    const updateFeedback = (id, updItem) => {
        setFeedBack(
            feedBack.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        );
    }

    return <FeedBackContext.Provider value={
        { feedBack, deleteFeedback, dataAdd, editFeedback, feedBackEdit, updateFeedback }
    } >
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;