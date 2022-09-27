import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import LoadingSpin from "react-loading-spin";
import { login } from "../../api/auth";
import { AuthContext } from "../../context/auth";
import { AuthContextType } from "../../types/auth";

type LoginModalProps = {
  isLoggedIn: boolean;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginModal = ({ isLoggedIn }: LoginModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { setToken } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    setIsModalOpen(isLoggedIn);
  }, [isLoggedIn]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const identifier = e.currentTarget.identifier.value;
    const password = e.currentTarget.password.value;

    const res = await login({ identifier, password });

    if (res) {
      setIsLoading(false);
      if (res.status === 200) {
        setToken(res.data.jwt);
        setIsModalOpen(false);
      } else if (res.status === 400) {
        setError("Invalid credentials");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      {isLoading ? (
        <LoadingSpin />
      ) : (
        <>
          <h5 className="mb-7">You must be logged in to view the page!</h5>
          <form action="" method="post" onSubmit={handleSubmit} id="LoginForm">
            <label className="text-base">Identifier</label>
            <input
              className="w-full h-8 p-2 border border-solid rounded mb-3"
              type="email"
              name="identifier"
              placeholder="Enter your Identifier"
            />
            <label className="text-base">Password</label>
            <input
              className="w-full h-8 p-2 border border-solid rounded mb-3"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm">{error}</p>
            <button
              className="h-8 w-24 bg-sky-600 text-white text-base mt-2 border border-solid border-slate-300 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </>
      )}
    </Modal>
  );
};

export default LoginModal;
