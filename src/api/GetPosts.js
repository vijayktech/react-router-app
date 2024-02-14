import React, { useEffect, useState } from 'react';


export default function GetPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err.message));
    }, []);

    return <>
        <h1>This is fetch data from API</h1> <br></br>
        <div className='container' >
            {posts.map(post => {
                return <div className='card' >
                    <div className="card-body">
                         <h5 className="card-title">Title : {post.title}</h5>
                        <p className="card-text"> Post : {post.body}</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                       
                    </div>
                </div>
            })};
        </div>
    </>
}
