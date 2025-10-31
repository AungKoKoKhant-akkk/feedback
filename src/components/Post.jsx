import React from 'react';
import {useParams} from "react-router-dom";

function Post() {

    const params = useParams();

    return (
        <div>
            <h1>{params.id}</h1>
            <h2>{params.name}</h2>
        </div>
    );
}

export default Post;