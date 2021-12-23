import { Link } from "react-router-dom";
import { useContext } from "react";
import { countContext } from "../../contexts";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Mobile } from "./Navigationbar.styled";

export const Navigationbar = () => {
  const { setIsAuth } = useContext(countContext);
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
      console.log("works!");
    });
  };

  const ArrayIsAuth = () => {
    return (
      <>
        <Link to={"/"} key={1}>
          Home
        </Link>
        <Link to={"/newpost"} key={2}>
          New Blog
        </Link>
        <Link to={"/login"} key={3} onClick={() => userSignOut()}>
          Log out
        </Link>
      </>
    );
  };
  const ArrayIsNotAuth = () => {
    return (
      <>
        <Link to={"/"} key={1}>
          Home
        </Link>
        <Link to={"/login"} key={3}>
          Log in
        </Link>
      </>
    );
  };

  const ArrayNavBar = () => {
    const { isAuth } = useContext(countContext);

    return <>{isAuth ? <ArrayIsAuth /> : <ArrayIsNotAuth />}</>;
  };
  return (
    <Mobile>
      <h1>The Archway Project</h1>
      <ul>
        <ArrayNavBar />
      </ul>
    </Mobile>
  );
};
