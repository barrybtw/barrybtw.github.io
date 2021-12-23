import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { countContext } from "../contexts";

const NewPostStyles = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  h1 {
    text-align: left;
    font-size: 3rem;
    padding: 1rem 0;
  }
  fieldset {
    border: none;
    font-size: 2rem;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { isAuth } = useContext(countContext);
  const navigate = useNavigate();
  const createPost = async (event) => {
    event.preventDefault();
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
      <h1>NEW POST</h1>
      <fieldset>
        <label>TITLE</label>
        <input
          type="text"
          placeholder="Title..."
          maxLength={32}
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </fieldset>
      <fieldset>
        <label>POST</label>
        <textarea
          name=""
          id="REQ1"
          cols="30"
          rows="10"
          placeholder="Post..."
          maxLength={2000}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      </fieldset>
      <button type="submit" onClick={createPost}>
        Create Post
      </button>
    </NewPostStyles>
  );
};
