import React, { useState } from 'react'
import './newpost.css';
import PostForm from './PostForm';
const Newpost = (props) => {

  const savePostDataHandler = (enteredPostData) => {
    const postData = {
      ...enteredPostData,
      id: Math.random().toString()
    }
    props.onAddPost(postData);
  };

  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  }


  return (
    <>
      <div className="form_btn">
        <button onClick={toggleFormVisibility} className="btn  btn-secondary card-link">
          {formVisible ? 'Close form' : 'Open form'}
        </button>
      </div>
      <div className="newpost" style={{ display: formVisible ? 'block' : 'none' }}>
        <PostForm onSavePostData={savePostDataHandler} />
      </div>

    </>
  )
}


export default Newpost;
