import React, {useState, useEffect} from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../providers/StateProviders";

import { auth } from "../firebase";

function Header() {
  const [{ basket,}, dispatch] = useStateValue();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
        alt=""
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__navOption" onClick={handleAuthentication}>
            <span className="header__navOptionLine1">Hello, {!user ? "Guest" : user.email}</span>
            <span className="header__navOptionLine2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header__navOption">
          <span className="header__navOptionLine1">Return</span>
          <span className="header__navOptionLine2">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLine1">Your</span>
          <span className="header__navOptionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navBasket">
            <ShoppingBasket />
            <div className="header__navOptionLine2 header__navBasketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
