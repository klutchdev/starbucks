import React from "react"
// import { Link } from "gatsby"

import "./rounded_button.css"

const RoundedButton = ({ label, isSolid, bgColor, labelColor }) => {
  const outlineButton = {
    color: labelColor,
    borderWidth: `1px`,
    borderColor: labelColor,
    borderStyle: `soild`,
  }

  const solidButton = {
    color: labelColor,
    backgroundColor: bgColor,
    border: `none`,
  }

  return (
    <button
      className="rounded-button"
      style={isSolid ? solidButton : outlineButton}
    >
      {label}
    </button>
  )
}

export default RoundedButton
