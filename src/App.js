import React, { useState, useEffect } from "react";
import { CardView } from "./Components/cardView";
import { NavBar } from "./Components/navBar";
import { Spinner } from "./Components/spinner/spinner";
import { getPostsIdUrl } from "./Utils/constants";
import axios from "axios";

import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let getPostsUrl = [];
      let postPromises = [];
      let postsId = await axios(getPostsIdUrl); //This API call will only return Id's of top stories
      if (postsId.status >= 400) throw new Error("something went wrong");
      postsId = postsId.data.slice(0, 24); // Only using partiall data for demo purpose otherwise Pagination should be used
      getPostsUrl = postsId.map(postID => {
        return `https://hacker-news.firebaseio.com/v0/item/${postID}.json`;
      });
      getPostsUrl.forEach(url => {
        postPromises.push(axios.get(url));
      });
      // Using Axios concurrent requests to get posts
      axios
        .all(postPromises)
        .then(
          axios.spread((...posts) => {
            setPosts(posts);
          })
        )
        .catch(errors => {
          setIsError(true);
        });
    };
    fetchData();
  }, []);

  const postsList =
    posts &&
    posts.map(post => (
      <CardView key={post.data.id} post={post.data}></CardView>
    ));

  return (
    <div className="App">
      <NavBar></NavBar>
      {isError && <p>Something went wrong...</p>}
      {posts ? (
        <section className="cards">{postsList}</section>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}

export default App;
