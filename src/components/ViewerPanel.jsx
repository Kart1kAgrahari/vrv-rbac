import React, { useState } from 'react';
import './ViewerPanel.css';
import post1 from '../bg5.jpg'
import post2 from '../bg2.jpg'
const ViewerPanel = () => {
  // const [posts] = useState([
  //   { title: 'Post 1', content: 'Content of post 1', comments: ['Great post!', 'Very informative.'] },
  //   { title: 'Post 2', content: 'Content of post 2', comments: ['Nice article.', 'I learned a lot.'] },
  // ]);
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'White Dodge Challenger', imageUrl: post1, Description: '', comments: ['Great post!', 'Very informative.']},
    { title: 'Post 2', content: 'Green Mustang GT', imageUrl: post2, Description: '', comments: ['Nice article.', 'I learned a lot.'] },
  ]);

  return (
    <div className="viewer-panel">
      <h1>Welcome,Viewer </h1>

      {/* View Posts */}
      <div className="posts">
        <h3>Available Posts</h3>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <img src={post.imageUrl} alt="Image\nto be displayed" height="150px" width="300px" />
            <div className="comments">
              <h5>Comments:</h5>
              {post.comments.map((comment, i) => (
                <p key={i} className="comment">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewerPanel;
