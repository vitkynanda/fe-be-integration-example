import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const getDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
};

const PostCard = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const handleOpenModal = async (id) => {
    setDetail(await getDetail(id));
    setOpen(true);
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>{post.title}</p>
      <p>{post.body}</p>
      <p onClick={() => handleOpenModal(post.id)} style={styles.link}>
        See Details ...
      </p>
      <Modal open={open} onClose={() => setOpen(false)} detail={detail} />
    </div>
  );
};

export default PostCard;

const styles = {
  container: {
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
    boxShadow: "1px 3px 20px 1px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  link: {
    color: "blue",
    cursor: "pointer",
  },
};
