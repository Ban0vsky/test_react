import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './page/Home'
import { Page } from "./page/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="page" element={<Page/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

"https://api.themoviedb.org/3/movie/550?api_key=XXX%22"