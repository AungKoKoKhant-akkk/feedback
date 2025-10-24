import React from 'react';

const title = "Hello World!";
const body = "this is a test page";
const comments = [
    {id  : 1 , text : "Hello World!"},
    {id : 2 , text : "Hello Test!"},
    {id : 3 , text : "Hi There!"},
]

const load = false;
const showComments = true;
const commentBlock = (
    <div className="comments">
        <h3> Comments({comments.length})</h3>
        <ul>
            {comments.map((comment,index)=>(

                <li key={index}>{comment.text}</li>


            ))}
        </ul>
    </div>
)



const App = () => {
    if(load) return <h1>Loading...</h1>
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && commentBlock}


        </div>
    );
};

export default App;