import React, { Suspense } from "react";
import Post from "./components/post/post";
import { db } from "./firebase/firebase";
import Navbar from "./components/navbar/navbar";
class App extends React.Component {
    state = {
        posts: [],
        fetching: false,
    };
    componentDidMount() {
        this.setState({
            fetching: true,
        });
        db.collection("posts").onSnapshot((snapshot) => {
            this.setState({
                posts: snapshot.docs.map((doc) => {
                    return doc.data();
                }),
                fetching: false,
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div style={{ marginBottom: "100px" }}></div>
                {this.state.fetching === true ? (
                    <div>Loading posts</div>
                ) : (
                    this.state.posts.map((post, id) => {
                        return (
                            <Post
                                key={id}
                                username={post.username}
                                caption={post.caption}
                                avatar={post.avatar}
                                image={post.image}
                            />
                        );
                    })
                )}
                {console.log(this.state.posts[0])}
            </React.Fragment>
        );
    }
}
export default App;
