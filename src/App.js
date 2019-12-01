import React from "react";
import { CardView } from "./Components/cardView";
import { NavBar } from "./Components/navBar";
import { Spinner } from "./Components/spinner/spinner";
import { usePosts } from "./Utils/getPosts";

import "./App.css";

function App() {
  const [posts, isError] = usePosts();
  const postsList =
    posts &&
    posts.map(post => (
      <CardView key={post.data.id} post={post.data}></CardView>
    ));

  return (
    <div className="App">
      <NavBar></NavBar>
      {isError ? (
        <p>Something went wrong...</p>
      ) : posts ? (
        <section className="cards">{postsList}</section>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}

export default App;
