import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              DevPos
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">
          <div className="bg-light p-5 mt-4 rounded-3">{children}</div>
        </div>
      </main>
    </div>
  );
}
