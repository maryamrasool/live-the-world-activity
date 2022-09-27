import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import Activity from "./pages/activity";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

import LoginModal from "./components/LoginModal";

import { AuthContext } from "./context/auth";

import { AuthContextType } from "./types/auth";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    Modal.setAppElement(`#root`);
  }, []);

  return (
    <div>
      {isLoggedIn ? null : <LoginModal isLoggedIn={!isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
