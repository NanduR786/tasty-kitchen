import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import Cookies from "js-cookie";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import "./index.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const onLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  return (
    <nav className="nav-container">
      <div className="nav-content">
      <div className="brand-container">
        <Link to="/"><img src={logo} alt="brand-logo" className="brand-logo" /></Link>
        <h1 className="brand-name">Tasty Kitchens</h1>
      </div>

      <div className="mb-menu" onClick={toggleMenu}>
        {!isMenuOpen ? <IoMenuSharp size={28} /> : <RxCross2 size={28} />}
      </div>

      <div className="nav-items-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        <button type="button" onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>

        <div className={`mb-nav-items-container ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-items">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
            <button type="button" onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
</div>
    </nav>
  );
};

export default Header;
