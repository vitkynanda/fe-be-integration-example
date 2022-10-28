import React from "react";
import PostCard from "./PostCard";

const ListPosts = ({ posts }) => {
  return (
    <div style={styles.container}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;

const styles = {
  container: {
    padding: 10,
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
    gap: "15px",
  },
};
