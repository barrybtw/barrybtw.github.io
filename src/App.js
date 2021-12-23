import { useState } from "react";

import { countContext } from "./contexts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalTheme } from "./styles/GlobalTheme";

import { ContainerCell } from "./components/ContainerCell";

import { Navigationbar } from "./components/Navigationbar";

import { Login, NewPost, Home } from "./pages";

function App() {
  //CONTEXT API
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  //CONTEXT API
  return (
    <Router>
      <GlobalTheme /> {/* Global Theme */}
      <countContext.Provider value={{ count, setCount, isAuth, setIsAuth }}>
        <ContainerCell>
          <Navigationbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="newpost" element={<NewPost />} />
          </Routes>
        </ContainerCell>
      </countContext.Provider>
    </Router>
  );
}

export default App;
