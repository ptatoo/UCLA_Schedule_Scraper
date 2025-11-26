import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    VITE_API_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://ucla-schedule-scraper-backend.onrender.com/",
    VITE_GOOGLE_CLIENT_ID:
      "454930251106-d7a2pe23cnivc8aehsehh4bkjbbvgna1.apps.googleusercontent.com",
  },
  output: "export",
  distDir: "dist",
  trailingSlash: true,
};

export default nextConfig;
