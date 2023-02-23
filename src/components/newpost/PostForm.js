import React, { useState } from 'react'
import './Postform.css'


const PostForm = (props) => {

    const [enteredImage, setEnteredImage]=useState("");
    const [enteredType, setEnteredType] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredUserProfile, setEnteredUserProfile] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");

    const ImageChangeHandler = (event) => { 
        setEnteredImage(event.target.value);
    };
    const TypeChangeHandler = (event) => {
        setEnteredType(event.target.value);
     };
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
     };
    const DescriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
     };
    const UserProfileChangeHandler = (event) => {
        setEnteredUserProfile(event.target.value);
     };
    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
     };

     const submitHandler=(event)=>{
        event.preventDefault();

        const postData={
            image : enteredImage,
            type: enteredType,
            title: enteredTitle,
            description: enteredDescription,
            userprofile: enteredUserProfile,
            username : enteredUsername
        }
         props.onSavePostData(postData);
        console.log(postData);

        setEnteredImage("");
         setEnteredType("");
         setEnteredTitle("");
         setEnteredDescription("");
         setEnteredUserProfile("");
         setEnteredUsername("");
     };

    return (
        <form onSubmit={submitHandler}>
            <div className="newpost__controls">
                <div className="newpost__control">
                    <label htmlFor="">Image link</label>
                    <input type="url" value={enteredImage} onChange={ImageChangeHandler} />
                </div>

                <div className="newpost__control">
                    <label htmlFor="">Type</label>
                    <input type="text" value={enteredType} onChange={TypeChangeHandler} />
                </div>

                <div className="newpost__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                </div>

                <div className="newpost__control">
                    <label htmlFor="">Description</label>
                    <input type="text" value={enteredDescription} onChange={DescriptionChangeHandler} />
                </div>

                <div className="newpost__control">
                    <label htmlFor="">User Profile Image link</label>
                    <input type="url" value={enteredUserProfile} onChange={UserProfileChangeHandler} />
                </div>

                <div className="newpost__control">
                    <label htmlFor="">Username</label>
                    <input type="text" value={enteredUsername} onChange={UsernameChangeHandler} />
                </div>

            </div>
            <div className="newpost__actions">
                <button className="btn btn-secondary card-link" type="submit">Add this Post</button>
            </div>
        </form>
    )
}

export default PostForm;
