import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/coup-coeur" element={<UserList />} />
                  <Route path="*" element={<Home/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
