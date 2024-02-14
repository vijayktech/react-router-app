import React, { useState } from "react";

const PostPosts = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    const savePost = async (postTitle, postBody) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts((posts) => [...posts, data]);
                console.log(data);

                setTitle('');
                setBody('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        savePost(title, body);
    }

    return <>
        <h1>This is POST API demo</h1>
        <div className="app">
            <div className="add-post-container">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} /> <br />
                    <textarea
                        name=""
                        className="form-control"
                        id="" cols="10" rows="8"
                        value={body} onChange={(e) => setBody(e.target.value)}
                    />
                    <br />
                    <button type="submit">Add Post</button>
                </form>
                <div className="container">
                    <h2>Saved Post !! </h2>
                    <div className="row">
                        <div className="col">
                            {posts.map(post => {
                                return <div key={post.userId}>
                                    <div className="col">Title : {post.title}</div>
                                    <div className="col">Post : {post.body}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default PostPosts;