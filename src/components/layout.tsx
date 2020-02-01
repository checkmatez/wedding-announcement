/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BackgroundSection from './background-section'
import Header from './header'
import './layout.css'
import 'typeface-bad-script'
import styled from 'styled-components'

const Footer = styled.footer`
  background: rebeccapurple;
  margin-top: 1.45rem;
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "rings.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          logoFluid={data.logo.childImageSharp.fluid}
        />

        <main style={{ display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
      </div>
      <Footer>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            color: 'white',
          }}
        >
          <p>Все права защищены © {new Date().getFullYear()}</p>
        </div>
      </Footer>
    </>
  )
}

export default Layout
