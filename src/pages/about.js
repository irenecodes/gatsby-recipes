import React from "react"
import Layout from "../components/Layout.component"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"
const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <p>About heading</p>
      </div>
      <Wrapper>
        <h1>
          testing styled <span>test</span>
        </h1>
        <p className="para">hello</p>
      </Wrapper>
      About Page
    </Layout>
  )
}

const Wrapper = styled.section`
  color: steelblue;
  h1 {
    color: gold;
    span {
      color: red;
    }
  }
  .para {
    color: gray;
  }
`

export default about
