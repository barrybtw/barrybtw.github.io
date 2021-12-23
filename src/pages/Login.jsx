//React & Router-dom
import { FcGoogle } from "react-icons/fc";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//ContextAPI
import { countContext } from "../contexts";
//Firebase
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(false);
  const { isAuth, setIsAuth } = useContext(countContext);

  const signInWithGoogle = () => {
    if (timer) return;
    setTimer(true);

    signInWithPopup(auth, provider).then((res) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);

      navigate("/");

      console.log(res);
    });
    setTimeout(() => {
      setTimer(false);
    }, 1000);
  };

  return (
    <div>
      {isAuth ? "hello" : "bye"}
      <div>
        <FcGoogle />
      </div>
      <button onClick={signInWithGoogle} disabled={timer}>
        Sign In With Google...
      </button>
    </div>
  );
};
