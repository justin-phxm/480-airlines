"use client";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosAirplane } from "react-icons/io";

export enum LOADINGSTAGES {
  DRIVE_IN,
  PENDING,
  DRIVE_OUT,
}
export default function Loading() {
  const [currentLoadingState, setCurrentLoadingState] = useState(
    LOADINGSTAGES.DRIVE_IN,
  );
  useEffect(() => {
    let pendingTimeout: NodeJS.Timeout;
    let driveInTimeout: NodeJS.Timeout;
    if (currentLoadingState === LOADINGSTAGES.DRIVE_IN) {
      driveInTimeout = setTimeout(() => {
        setCurrentLoadingState(LOADINGSTAGES.PENDING);
        console.log("first");
      }, 1000);
    }
    if (currentLoadingState === LOADINGSTAGES.PENDING) {
      console.log("second");
      pendingTimeout = setTimeout(() => {
        setCurrentLoadingState(LOADINGSTAGES.DRIVE_OUT);
      }, 2000);
    }

    return () => {
      clearTimeout(driveInTimeout);
      clearTimeout(pendingTimeout);
    };
  }, [currentLoadingState]);
  const planeAnimationClass = useMemo(() => {
    switch (currentLoadingState) {
      case LOADINGSTAGES.DRIVE_IN:
        return "animate-driveInScreen";
      case LOADINGSTAGES.PENDING:
        return "animate-bump";
      case LOADINGSTAGES.DRIVE_OUT:
        return "animate-driveOffScreen";
      default:
        return "";
    }
  }, [currentLoadingState]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 ">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IoIosAirplane size={48} className={twMerge(planeAnimationClass)} />
        <CircularProgress />
      </Box>
    </div>
  );
}
