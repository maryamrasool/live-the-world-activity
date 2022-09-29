import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import Activity from "./pages/activity";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

import LoginModal from "./components/loginModal";

import { AuthProvider } from "./context/auth";

const App = () => {
  useEffect(() => {
    Modal.setAppElement(`#root`);
  }, []);

  return (
    <AuthProvider>
      <div>
        <LoginModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity/:activitySlug" element={<Activity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
