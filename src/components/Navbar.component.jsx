import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Link to="/tags">Tags</Link>
      <Link to="/recipes">Recipes</Link>
    </nav>
  )
}

export default Navbar
