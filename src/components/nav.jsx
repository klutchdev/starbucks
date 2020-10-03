import React from "react"
import { Link } from "gatsby"
import RoundedButton from "../components/rounded_button"
import BrandSVG from "../svg/brand"
import ChevronRight from "../svg/chev_right"
import Burger from "../svg/burger"
import Geo from "../svg/geo"

import "./nav.css"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        {/* Logo */}
        <Link to="/">
          <div className="brand-container">
            <BrandSVG />
          </div>
        </Link>

        {/* Menu toggle */}
        <div className="burger-container">
          <Burger />
        </div>

        {/* Menu content  */}
        <div className="navbar-nav">
          <ul className="nav-items">
            {/* Menu dropdown link */}
            <li className="nav-item">
              <div className="menu-dropdown">
                <div className="menu-link-left">
                  <h2>Menu</h2>
                </div>
                <div className="menu-link-right">
                  <ChevronRight />
                </div>
              </div>
            </li>

            {/* Rewards */}
            <Link to="/rewards">
              <li className="nav-item">
                <h2 className="menu-link-text">Rewards</h2>
              </li>
            </Link>

            {/* Gift Cards */}
            <Link to="/gift-cards">
              <li className="nav-item">
                <h2 className="menu-link-text">Gift Cards</h2>
              </li>
            </Link>

            <hr />

            {/* Sign in / Join now */}
            <div className="nav-buttons-container">
              <RoundedButton
                label="Sign in"
                isSolid="false"
                bgColor="transparent"
                labelColor="#030405"
              />
              <RoundedButton
                label="Join now"
                isSolid="true"
                bgColor="#030405"
                labelColor="#edebe9"
              />
            </div>

            {/* Find a store */}
            <Link to="/">
              <div className="find-store-container">
                <div className="geo-container">
                  <Geo />
                </div>
                <h2 className="menu-link-text">Find a store</h2>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
