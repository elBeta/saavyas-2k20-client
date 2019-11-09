import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

function ImageSlideshow(props) {
  return (
    <BackgroundSlider
      {...props}
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { relativeDirectory: { eq: "event-slideshow-slides" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxHeight: 1080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  )
}

export default ImageSlideshow
