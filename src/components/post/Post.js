import React, {useState} from 'react'; 
import './Post.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const Post=(props)=>{

    const [like,setLike] = useState(0);

    const clickhandler=()=>{
        setLike(like+1);
    }
    return (
        <>
            <section className="d-flex flex-wrap main-card-container">

                <div className="card-container">
                    <div className="card card-body" style={{ width: "18rem" }} >
                        <img src={props.image} className="card-img-top" alt="This is the first post" />
                        <div className="card-subtitle mb-2 text-muted">
                            {props.type}
                        </div>
                        <div className="card-titlee">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="card-text">
                            <p>{props.description}</p>
                        </div>
                        <div className="">

                            <div className="d-flex flex-row mb-3">
                                <img src={props.userprofile} className="img-fluid rounded-circle" alt="user:" />
                                <div className="username">{props.username}</div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="">
                                    <button className="btn btn-secondary card-link" onClick={clickhandler}> {like} Likes</button>
                                </div>

                                <div className="post_views">
                                    <button className="btn btn-secondary card-link">Share</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Post;