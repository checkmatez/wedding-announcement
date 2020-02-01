import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat;
  background-size: cover;
`

const BackgroundSection: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "party-tile-bg-lg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <StyledBackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </StyledBackgroundImage>
  )
}

export default BackgroundSection
