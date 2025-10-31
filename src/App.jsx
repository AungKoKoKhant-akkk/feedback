import React from 'react';

import Header from "./components/Header.jsx";
import './App.css';
import FeedbackList from './components/FeedbackList.jsx';

import FeedBackStats from "./components/FeedBackStats.jsx";
import FeedBackForm from "./components/FeedBackForm.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About.jsx';

const App = () => {





    return (
        <Router>
            <div>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedbackList

                                />
                            </>
                        } />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;