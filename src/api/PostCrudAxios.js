import React, { useEffect, useState } from "react";
import axios from "axios";

const axiosClient = axios.create({baseURL: "https://jsonplaceholder.typicode.com/posts" });

export default function PostCrudAxios(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    // GET 
    useEffect(()=> {
        const fetchPost = async () => {
            try{
            let response = await axiosClient.get('?_limit=2');
            setPosts(response.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchPost();
    },[]);

    // POST
    const savePost = async (postTitle, postBody) => {
       let response = await axiosClient.post('', {
            title: postTitle,
            body: postBody,
            userId: Math.random().toString(36).slice(2),
        });

        let dataPost = response.data;
   
        setPosts((posts) => [...posts, dataPost]);   
        setTitle('');
        setBody('');
    }

    // DELETE
    const deletePost = async (deleteUserId) => {
        await axiosClient.delete(`${deleteUserId}`);        
        const filteredPost = posts.filter(post => post.userId !== deleteUserId);
        setPosts(filteredPost);
        
    }

    // PUT
    const updatePost = () => {

    }

    const submitPost = (e) => {
        e.preventDefault();
        savePost(title, body);
    }

    return <>
    <h2> AXIOS API demo </h2>

    <div className="app">
            <div className="add-post-container">
                <form onSubmit={submitPost}>
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
            </div>

        </div>

    <div className='container' >
        <h2>Fetched Data from API</h2>
            {posts.map(post => {
                return <div className='card' >
                    <div className="card-body" key={post.id}>
                         <h5 className="card-title">Title : {post.title}</h5>
                        <p className="card-text"> Post : {post.body}</p>
                        <button className="btn btn-primary" onClick={() => deletePost(post.userId)}> Delete Post </button>
                        <a href="#" className="card-link">Another link</a>                       
                    </div>
                </div>
            })}
        </div>
    </>
}