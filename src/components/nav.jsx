import React, { useState } from "react"
import { Link } from "gatsby"
import RoundedButton from "../components/rounded_button"
import BrandSVG from "../svg/brand"
import ChevronRight from "../svg/chev_right"
import Burger from "../svg/burger"
import Close from "../svg/close"
import Geo from "../svg/geo"

import "./nav.css"

const Navbar = () => (
  <nav>
    <div className="navbar">
      <Brand />
      <MenuToggle />
      <MobileMenu />
    </div>
  </nav>
)

const MobileMenu = () => (
  <div className="navbar-nav">
    <ul className="nav-items">
      <MenuItem linkText="Menu" linkUrl="/menu" />
      <MenuItem linkText="Rewards" linkUrl="/rewards" />
      <MenuItem linkText="Gift Cards" linkUrl="/gift-cards" />
      <hr />
      <ButtonBar />
      <LocationBar />
    </ul>
  </div>
)

const MenuItem = ({ linkUrl, linkText }) => (
  <li className="nav-item">
    <Link to={linkUrl}>
      <span className="icon-button">{leftIcon}</span>
      <h2 className="menu-link-text">{linkText}</h2>
      <span className="icon-button">{rightIcon}</span>
    </Link>
  </li>
)

const Brand = () => (
  <div className="brand-container">
    <Link to="/">
      <BrandSVG />
    </Link>
  </div>
)

const MenuToggle = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="burger-container">
      <Link to="/" onClick={() => setOpen(!open)}>
        {open ? <Burger /> : <Close />}
      </Link>
    </div>
  )
}

const ButtonBar = () => (
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
)

const LocationBar = () => (
  <div className="find-store-container">
    <Link to="/">
      <div className="geo-container">
        <Geo />
      </div>
      <h2 className="menu-link-text">Find a store</h2>
    </Link>
  </div>
)

export default Navbar
