import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getRandomNumber } from "../helpers/randomNum";
import { auth, db } from "../firebase";
import { DoubbleBubble } from "../components/Loading.Spinner";
import { FcFullTrash } from "react-icons/fc";
import { useContext } from "react/cjs/react.development";
import { countContext } from "../contexts";

export const Home = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef).then((data) => {
        setIsLoading(false);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getPosts();
  }, [reRender]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const TotalPosts = () => {
    const { isAuth } = useContext(countContext);
    return (
      <>
        {postList.map((postDoc) => {
          const { title, post } = postDoc;
          console.log(postDoc);
          return (
            <div key={getRandomNumber({ number: 2000 })}>
              <h1>{title}</h1>
              <p>{post}</p>

              <div>
                {isAuth && postDoc.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(postDoc.id);
                      setReRender(!reRender);
                    }}
                  >
                    <FcFullTrash fontSize={50} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section>
      <h1>Posts</h1>
      {!isLoading && (
        <>
          <TotalPosts />
        </>
      )}
      {isLoading && (
        <>
          <DoubbleBubble />
        </>
      )}
    </section>
  );
};
