import { IndividualPost } from "./Post.styled";
import { countContext } from "../../contexts";
import { useContext } from "react";
import { getRandomNumber } from "../../helpers/randomNum";
import { auth } from "../../firebase";
import { FcFullTrash } from "react-icons/fc";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const Post = ({ postDoc }) => {
  const { title, post, author, id } = postDoc;
  const { isAuth } = useContext(countContext);
  const { setReRender, reRender } = useContext(countContext);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <IndividualPost key={getRandomNumber({ number: 2000 })}>
      <div className="box">
        <div className="content">
          <h1>{title}</h1>
          <p>{post}</p>
          <p className="author">Written by {author.name}</p>
          {isAuth && author.id === auth.currentUser.uid && (
            <button
              onClick={() => {
                deletePost(id);
                setReRender(!reRender);
              }}
            >
              <FcFullTrash fontSize={50} />
            </button>
          )}
        </div>
      </div>
    </IndividualPost>
  );
};
