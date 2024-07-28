import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
export default function HomePage() {
  return (
    <MainLayout>
      <div>
        <h1>Point Of Sale system for small businesses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          quos iste velit vero, necessitatibus rerum, omnis quam aperiam fuga
          magnam doloribus, sit consequuntur id quae corporis esse eaque vel
          alias?
        </p>
        <p>If you have an issue , call +25470101001 at anytime</p>
        <Link to="/pos" className="btn btn-primary">
          Click here to sell products
        </Link>
      </div>
    </MainLayout>
  );
}
