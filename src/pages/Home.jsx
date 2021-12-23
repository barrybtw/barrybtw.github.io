import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getRandomNumber } from "../helpers/randomNum";
import { db } from "../firebase";
import { DoubbleBubble } from "../components/Loading.Spinner";
import { useContext } from "react";
import { countContext } from "../contexts";
import { Post } from "../components/Post/Post";
import { PostContainer } from "../components/Post/Post.styled";

export const Home = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { reRender } = useContext(countContext);

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

  const TotalPosts = () => {
    return (
      <PostContainer>
        <h1 id="header">POSTS</h1>
        <div>
          {postList.map((postDocument) => {
            return (
              <Post
                postDoc={postDocument}
                key={getRandomNumber({ number: 2000 })}
              />
            );
          })}
        </div>
      </PostContainer>
    );
  };

  return (
    <section key={123123}>
      {!isLoading ? (
        <TotalPosts key={23123} />
      ) : (
        <DoubbleBubble key={23123432} />
      )}
    </section>
  );
};
