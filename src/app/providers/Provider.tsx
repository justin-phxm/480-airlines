"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider>{children}</SessionProvider>
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </>
  );
};

export default Providers;
