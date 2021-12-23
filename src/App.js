import { useState } from "react";

import { countContext } from "./contexts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalTheme } from "./styles/GlobalTheme";

import { ContainerCell } from "./components/ContainerCell";

import { Navigationbar } from "./components/Navigationbar/Navigationbar";

import { Login, NewPost, Home } from "./pages";

function App() {
  //CONTEXT API
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [reRender, setReRender] = useState(true);
  //CONTEXT API
  return (
    <Router>
      <GlobalTheme /> {/* Global Theme */}
      <countContext.Provider
        value={{ count, setCount, isAuth, setIsAuth, reRender, setReRender }}
      >
        <ContainerCell>
          <Navigationbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="newpost" element={<NewPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ContainerCell>
      </countContext.Provider>
    </Router>
  );
}

export default App;
