import { useState, useEffect } from "react";
import { getPostsIdUrl, baseUrl } from "./constants";
import axios from "axios";

export function usePosts() {
  const [posts, setPosts] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let getPostsUrl = [];
      let postPromises = [];
      let postsId = await axios(getPostsIdUrl); //This API call will only return Id's of top stories
      if (postsId.status >= 400) {
        setIsError(true);
        return [[], isError];
        //throw new Error("something went wrong");
      }
      postsId = postsId.data.slice(0, 24); // Only using partiall data for demo purpose otherwise Pagination should be used
      getPostsUrl = postsId.map(postID => {
        return `${baseUrl}${postID}.json`;
      });
      getPostsUrl.forEach(url => {
        postPromises.push(axios.get(url));
      });
      // Using Axios concurrent requests to get posts
      axios
        .all(postPromises)
        .then(posts => {
          setPosts(posts);
        })
        .catch(errors => {
          setIsError(true);
        });
    };
    fetchData();
  }, []);

  return [posts, isError];
}
