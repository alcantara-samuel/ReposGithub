import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/repositorio/:repositorio"
          element={<Repositorio></Repositorio>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
