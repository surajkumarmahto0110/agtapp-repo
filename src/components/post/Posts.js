import React from 'react';
import './Posts.css';
import Post from './Post';

const Posts = (props) => {
    return (
        <>
            <div className="posts">
                {
                    props.Posts.map(
                        post => (
                            <Post
                                image={post.image}
                                type={post.type}
                                title={post.title}
                                description={post.description}
                                userprofile={post.userprofile}
                                username={post.username}
                            />
                        )
                    )
                }

            </div>
        </>
    );
}
export default Posts;