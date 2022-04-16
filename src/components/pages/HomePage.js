import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center glow">
      <h1 className="main-title home-page-title">welcome</h1>
      <Link to="/">
        <button className="primary-button glow">Log out</button>
      </Link>
    </div>
  );
}
