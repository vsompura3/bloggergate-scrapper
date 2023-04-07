import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { AppContext } from "./context/Context";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

function App() {
  const [state, setState] = useState([]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
