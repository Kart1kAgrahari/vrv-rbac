import React, { useState } from 'react';
import './EditorPanel.css';
import post1 from '../bg5.jpg'
import post2 from '../bg2.jpg'
const EditorPanel = () => {
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'White Dodge Challenger', imageUrl: post1, Description: '' },
    { title: 'Post 2', content: 'Green Mustang GT', imageUrl: post2, Description: '' },
  ]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    Description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleCreatePost = () => {
    if (newPost.title && newPost.content && newPost.imageUrl && newPost.Description) {
      setPosts([...posts, newPost]);
      setNewPost({
        title: '',
        content: '',
        imageUrl: '',
        carDescription: ''
      });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="editor-panel">
      <h1>Welcome, Editor</h1>

      {/* Editor Options */}
      <div className="editor-options">
        <div className="card">
          <h3>Create New Post</h3>
          <p>Create a new article or post for the platform.</p>
          <div className="post-form">
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={newPost.title}
              onChange={handleInputChange}
            />
            <textarea
              name="content"
              placeholder="Post Content"
              value={newPost.content}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newPost.imageUrl}
              onChange={handleInputChange}
            />
            <textarea
              name="Description"
              placeholder="Description"
              value={newPost.Description}
              onChange={handleInputChange}
            />
            <button onClick={handleCreatePost} >Create Post</button>
          </div>
        </div>
        <div className="card">
          <h3>Manage Existing Posts</h3>
          <p>Edit or delete posts you have already published.</p>
          <button onClick={() => alert('Manage Posts Coming Soon!')}>
            Manage Posts
          </button>
        </div>
      </div>

      {/* Displaying Posts */}
      <div className="posts">
        <h3>Your Posts</h3>
        {posts.length === 0 ? (
          <p>No posts created yet.</p>
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index} className="post">
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                {post.imageUrl && (
                  <div className="car-image">
                    <img src={post.imageUrl} alt="Image\nto be displayed" />
                    <p>{post.Description}</p>
                  </div>
                )}
                <button class= "mybtn">Edit</button>
                <button class= "mybtn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EditorPanel;
