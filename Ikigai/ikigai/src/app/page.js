"use client";
import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/LandingPage/NavBar/NavBar";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <NavBar />
      <LandingPage />
    </div>
  );
}
