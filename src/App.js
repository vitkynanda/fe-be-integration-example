import { useEffect, useState } from "react";
import ListPosts from "./components/ListPosts";

const get = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async (subscribe) => {
    const res = await get();
    if (subscribe) setPosts(res);
  };

  useEffect(() => {
    let subscribe = true;
    getPosts(subscribe);
    return () => (subscribe = false);
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Integration Example</h1>
      <ListPosts posts={posts} />
    </div>
  );
}

export default App;
