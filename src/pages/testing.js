import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.component"
import Gallery from "../components/Gallery.component"

const Testing = ({ data }) => {
  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}

export default Testing
