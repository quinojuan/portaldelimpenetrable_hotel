import "./App.css";

import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Rooms />} path="/rooms" />
        <Route element={<SingleRoom />} path="/rooms/:slug" />
        <Route element={<Error />} path="*"/>
      </Routes>
    </>
  );
}

export default App;
