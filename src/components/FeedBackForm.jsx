import React, { useState, useEffect } from 'react';
import Card from "./share/Card.jsx";
import Button from "./share/Button.jsx";
import Rating from "./Rating.jsx";
import FeedBackContext from '../context/FeedBackContext.jsx';


function FeedBackForm() {
    const [text, setText] = useState("");
    const [rating, setRating] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState("");

    const { dataAdd, feedBackEdit, updateFeedback } = React.useContext(FeedBackContext);


    const handleChange = (e) => {
        if (text === "") {
            setBtnDisable(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters");
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedBackEdit.edit === true) {
                updateFeedback(feedBackEdit.item.id, newFeedback);
            } else {
                dataAdd(newFeedback);
            }

            setText("");
        }
    }



    useEffect(() => {
        if (feedBackEdit.edit === true) {
            setBtnDisable(false);
            setText(feedBackEdit.item.text);
            setRating(feedBackEdit.item.rating);
        }
    }, [feedBackEdit])

    return (
        <Card>
            <Rating select={(rating) => setRating(rating)} />
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service</h2>
                <div className="input-group">
                    <input type="text" onChange={handleChange} placeholder="Write a review" value={text} />

                    <Button type="submit" isDisabled={btnDisable}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedBackForm;