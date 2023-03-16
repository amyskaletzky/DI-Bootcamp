import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import blog_icon from '../imgs/blog-icon.png';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {

    //     // }
    // }

    render() {
        this.props.posts.forEach(element => {
            console.log(element)
        })
        return (
            <>
                <h1>Home</h1>
                {

                    this.props.posts.length > 0 ? this.props.posts.map(post => {
                        return (
                            < div key={post.id} >
                                <img src={blog_icon} alt="blog-icon" />
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                                <Link to={`/${post.id}`}>Go To Post</Link>
                            </div>

                        )


                    }) : <p>No posts to show😢</p>
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts.body)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)