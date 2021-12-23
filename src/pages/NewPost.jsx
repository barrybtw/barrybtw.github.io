import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { countContext } from "../contexts";

const NewPostStyles = styled.div`
  height: 100%;
`;

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { isAuth } = useContext(countContext);
  const navigate = useNavigate();
  const createPost = async () => {
    if (title === "") return;
    if (text === "") return;

    const postCollectionRef = collection(db, "posts");
    await addDoc(postCollectionRef, {
      title,
      post: text,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  return (
    <NewPostStyles>
      <div>
        <h1>Create a new post!</h1>
        <div>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            placeholder="Title..."
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="">Post:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Post..."
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        </div>
        <button onClick={createPost}>Create Post</button>
      </div>
    </NewPostStyles>
  );
};
