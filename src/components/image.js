import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function FluidImage(props) {
  const { fileName, ...otherProps } = props

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxHeight: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(edge =>
    edge.node.relativePath.includes(fileName)
  )

  if (!image) {
    return null
  }

  return (
    <Img
      fluid={image.node.childImageSharp.fluid}
      key={image.node.id}
      {...otherProps}
    />
  )
}

export default FluidImage
