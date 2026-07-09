"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 650,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return null;
}
