import { BiArch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react/cjs/react.development";
import { countContext } from "../contexts";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  line-height: normal;

  color: #353535;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: clamp(1rem, 5rem, 100rem);
  }
`;

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
    <Nav>
      <div>
        <BiArch fontSize={60} />
      </div>
      <ul>
        <ArrayNavBar />
      </ul>
    </Nav>
  );
};
