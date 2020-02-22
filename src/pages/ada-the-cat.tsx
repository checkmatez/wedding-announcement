import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'

import { PhotoCard } from '../components/photo-card'
import '../components/reset.css'
import SEO from '../components/seo'

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  overflow: hidden;
  z-index: 1;
`

const StyledHeader = styled.header`
  z-index: 9;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
`

const Footer = styled.footer`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(7, 7, 115, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  margin-top: 1.45rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  padding: 0 10px;
`

const Header = styled.h1`
  font-family: Bad Script, cursive;
  letter-spacing: 10px;
  text-transform: uppercase;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AdaTheCatPage: React.FC = () => {
  const data = useStaticQuery(adaPageQuery)

  return (
    <div>
      <SEO title="Ада" />
      {/* <StyledHeader>
        <StyledLink to="/">
          <Center>
            <h2
              style={{
                margin: 0,
                fontFamily: `Bad Script`,
                letterSpacing: '2px',
                lineHeight: '3rem',
              }}
            >
              Ада Лавлейс - кошка-програмист! 🐈
            </h2>
          </Center>
        </StyledLink>
      </StyledHeader> */}
      <Column>
        <Header>Ада Лавлейс</Header>
        {/* <Header>
          Ада Лавлейс - первая женщина(зачеркнуто) кошка-программист
        </Header> */}
        <PhotoCard
          title="Знакомство 🐱"
          fluid={data.catSmall.childImageSharp.fluid}
          wide
        />
      </Column>
    </div>
  )
}

const adaPageQuery = graphql`
  query {
    catSmall: file(relativePath: { eq: "cat-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AdaTheCatPage
