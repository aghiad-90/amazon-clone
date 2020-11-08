import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "../context/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images-fe.ssl-images-amazon.com/images/G/35/gc/designs/livepreview/amazon_logo_noto_email_v2016_au-main._CB444479176_.png"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Seacrch"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span>Hello Aghiad</span>
            <span>Sign In</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span>{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
