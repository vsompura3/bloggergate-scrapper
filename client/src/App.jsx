import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { AppContext } from "./context/Context";
import HackerNews from "./pages/HackerNews";
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
            <Route path="/hackernews" element={<HackerNews />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
