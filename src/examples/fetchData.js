import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  // option 1. not destructure
  //   const data = useStaticQuery(getData)
  //   option 2 destructure and add 'info' alias
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* option 1 */}
      {/* <h2>Name : {data.site.info.person.name}</h2> */}
      {/* option 2 */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
