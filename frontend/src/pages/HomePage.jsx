import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
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
          <div className="bg-light p-5 mt-4 rounded-3">
            <h1>Point Of Sale system for small businesses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              quos iste velit vero, necessitatibus rerum, omnis quam aperiam
              fuga magnam doloribus, sit consequuntur id quae corporis esse
              eaque vel alias?
            </p>
            <p>If you have an issue , call +25470101001 at anytime</p>
            <Link to="/pos" className="btn btn-primary">
              Click here to sell products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
