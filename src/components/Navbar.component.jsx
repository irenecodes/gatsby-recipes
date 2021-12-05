import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav>
      <FiAlignJustify />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Link to="/tags">Tags</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
