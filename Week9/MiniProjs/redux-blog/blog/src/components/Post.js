import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost } from "../actions/postActions";

const Post = (props) => {

    let { post_id } = useParams()
    const navigate = useNavigate()
    let correctPost = props.posts.find(post => post.id === post_id)

    const handleClick = (id) => {
        props.delete(id)
        navigate('/')
    }

    return (

        <>
            {
                correctPost != null ? (
                    < div >
                        <h2>{correctPost.title}</h2>
                        <p>{correctPost.body}</p>
                        <button type="button" onClick={(post_id) => handleClick(post_id)}>Delete Post</button>
                    </div>
                ) : <p>Loading...</p>
            }



        </>
    )

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);