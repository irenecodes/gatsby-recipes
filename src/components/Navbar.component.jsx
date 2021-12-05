import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/company">Company</Link>
      <Link to="company/history">History</Link>
    </nav>
  )
}

export default Navbar
