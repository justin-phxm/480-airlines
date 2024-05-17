"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    toast.success("Welcome to the app!", {
      position: "bottom-right",
    });
  }, []);

  return (
    <>
      {children}

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Providers;
