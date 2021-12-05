import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      My awesome root home page
      <Link to="/about">About</Link>
      <Link to="/company">Company</Link>
      <Link to="company/history">History</Link>
    </>
  )
}
