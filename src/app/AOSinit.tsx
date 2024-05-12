"use client";
import { useEffect } from "react";
import AOS, { type AosOptions } from "aos";
import "aos/dist/aos.css";

export default function AOSinit() {
  useEffect(() => {
    const aosOptions: AosOptions = {
      duration: 1000,
      once: true,
    };
    AOS.init(aosOptions);
  }, []);

  return null;
}
