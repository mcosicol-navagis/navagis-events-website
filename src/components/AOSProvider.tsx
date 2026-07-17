"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import type { AosOptions } from "aos";

const AOS_CONFIG: AosOptions = {
  once: true,
  duration: 650,
  easing: "ease-out-cubic",
  offset: 60,
};

export default function AOSProvider() {
  useEffect(() => {
    AOS.init(AOS_CONFIG);

    // Refresh after full page load so AOS catches any elements
    // that weren't in the DOM when init() ran.
    const onLoad = () => AOS.refresh();
    if (document.readyState === "complete") {
      AOS.refresh();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
