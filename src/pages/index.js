import React from "react"
import Layout from "../components/Layout.component"

import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home heading</h1>
        <p>i'll be blue text from home module</p>
        <p className={text}>caps coming from home module</p>
      </div>
      My awesome root home page
    </Layout>
  )
}
