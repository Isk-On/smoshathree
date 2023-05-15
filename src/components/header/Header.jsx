import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>Игра</li>
      </Link>
      <Link to="/HeroesPage" style={{ textDecoration: "none" }}>
        <li>Герои</li>
      </Link>
    </div>
  );
};

export default Header;
