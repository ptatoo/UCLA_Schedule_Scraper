import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Heading";
import SearchApp from "./SearchApp";
import NotifApp from "./NotifApp";
import Home from "./Home";
import Test from "./components/test.tsx"

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="bg-gray-100 min-h-screen">
        <BrowserRouter basename="/UCLA_Schedule_Scraper">
          <Header />
          <NavLink to="/" />
          <NavLink to="/search" />
          <NavLink to="/notifications" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchApp />} />
            <Route path="/notifications" element={<NotifApp />} />
            <Route path="*" element={<p>Path not resolved</p>} />
          </Routes>
          <Test/>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  </StrictMode>
);
