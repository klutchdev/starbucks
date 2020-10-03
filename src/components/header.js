import { Link } from "gatsby"
import React from "react"

import "./header.css"

const Header = () => (
  <header>
    <div className="banner-container">
      <p className="banner-text">
        We remain committed to the health and well-being of our partners and
        customers. <Link to="/"> Learn more</Link>
      </p>
    </div>
  </header>
)

export default Header
