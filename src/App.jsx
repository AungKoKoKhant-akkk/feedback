import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header.jsx";
import './App.css';
import FeedbackList from './components/FeedbackList.jsx';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData.js';
import FeedBackStats from "./components/FeedBackStats.jsx";
import FeedBackForm from "./components/FeedBackForm.jsx";

const App = () => {

    const [feedBack, setFeedBack] = useState(FeedbackData);
    const dataAdd = (newFeedBackData) =>{
        newFeedBackData.id = uuidv4();
        setFeedBack([newFeedBackData,...feedBack]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedBack(feedBack.filter((items) => items.id !== id));
        }
    }
    return (
        <div>
            <Header />
            <div className='container'>
                {/*{feedBack} က အပေါ်က const feedBack ကိုယူသုံးထားတာ*/}
                {/*feedBackSent က feedBack ကို FeedbackList component ကိုပို့ပေးတာ*/}
                <FeedBackForm SubmitDataFromForm = {dataAdd}/>
                <FeedBackStats feedBacktoStats = {feedBack} />
                <FeedbackList feedBackSent={feedBack}
                                handleDeletefromAppJsx={deleteFeedback}
                />
            </div>
        </div>
    );
};

export default App;