import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  siteTitle?: string
  logoFluid?: FluidObject | FluidObject[]
}

// background: rgb(2, 0, 36);
// background: linear-gradient(
//   90deg,
//   rgba(2, 0, 36, 1) 0%,
//   rgba(7, 7, 115, 1) 35%,
//   rgba(0, 212, 255, 1) 100%
// );
// margin-bottom: 1.45rem;
const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

const Header: React.FC<HeaderProps> = ({ siteTitle = '', logoFluid }) => (
  <StyledHeader>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        padding: '1rem 0',
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Img
          fluid={logoFluid}
          style={{ width: '40px', height: '40px', marginRight: '20px' }}
        />
        <h1
          style={{ margin: 0, fontFamily: `Bad Script`, letterSpacing: '2px' }}
        >
          {siteTitle}
        </h1>
      </Link>
    </div>
  </StyledHeader>
)

export default Header
