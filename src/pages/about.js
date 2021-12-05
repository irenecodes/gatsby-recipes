import React from "react"
import Layout from "../components/Layout.component"
import * as aboutStyles from "../examples/about.module.css"
const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <p>About heading</p>
      </div>
      About Page
    </Layout>
  )
}

export default about
