import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import { PhotoCard } from '../components/photo-card'
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
  margin-bottom: 3rem;
`

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
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
  flex-direction: row;
  width: 100%;
  padding: 0 40px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Image = styled(Img)`
  border-radius: 10px;
  max-width: 800px;
`

const Header = styled.h1`
  font-family: Bad Script, cursive;
  letter-spacing: 10px;
  text-transform: uppercase;
`

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
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
      alenaHappyStPeterburg: file(
        relativePath: { eq: "alena-happy-st-peterburg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaOpenPresents: file(relativePath: { eq: "alena-open-presents.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaScyscraper: file(relativePath: { eq: "alena-scyscraper.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaSnowwhite: file(relativePath: { eq: "alena-snowwhite.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaSwing: file(relativePath: { eq: "alena-swing.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaTouchingChicken: file(
        relativePath: { eq: "alena-touching-chicken.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaWithCat1: file(relativePath: { eq: "alena-with-cat-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alenaWithCat2: file(relativePath: { eq: "alena-with-cat-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      catGuiltyPlaying: file(relativePath: { eq: "cat-guilty-playing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      catPosing: file(relativePath: { eq: "cat-posing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      catSmall: file(relativePath: { eq: "cat-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxArcher: file(relativePath: { eq: "max-archer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxDriving: file(relativePath: { eq: "max-driving.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxPalm: file(relativePath: { eq: "max-palm.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxPotter: file(relativePath: { eq: "max-potter.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherFeedingDucks: file(
        relativePath: { eq: "together-feeding-ducks.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherAfimall: file(relativePath: { eq: "together-afimall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherSelfieFlowers: file(
        relativePath: { eq: "together-selfie-flowers.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherStPeterburg: file(
        relativePath: { eq: "together-st-peterburg.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherTipsHat: file(relativePath: { eq: "together-tips-hat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherHappyFaces: file(
        relativePath: { eq: "together-happy-faces.png" }
      ) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      togetherOffendedMp4: file(relativePath: { eq: "together-offended.mp4" }) {
        publicURL
      }
      togetherClouds: file(relativePath: { eq: "together-clouds.jpeg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proposalMp4: file(relativePath: { eq: "proposal.mp4" }) {
        publicURL
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Hero>
          <StyledHeader>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
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
                  fluid={data.logo.childImageSharp.fluid}
                  style={{ width: '40px', height: '40px', marginRight: '20px' }}
                />
                <h1
                  style={{
                    margin: 0,
                    fontFamily: `Bad Script`,
                    letterSpacing: '2px',
                  }}
                >
                  {data.site.siteMetadata.title}
                </h1>
              </Link>
            </div>
          </StyledHeader>
          <video
            preload="auto"
            muted
            autoPlay
            loop
            poster={data.togetherHappyFaces}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              zIndex: -1,
              width: 'auto',
              height: 'auto',
            }}
          >
            <source src="img/video/video.webm" type="video/webm" />
            <source src={data.proposalMp4.publicURL} type="video/mp4" />
          </video>
        </Hero>
        <Grid>
          <Column>
            <Header>Он 👨‍💻</Header>
            <PhotoCard
              title="Робин Гуд"
              fluid={data.maxArcher.childImageSharp.fluid}
            />
            <PhotoCard
              title="гоняет на джипах"
              fluid={data.maxDriving.childImageSharp.fluid}
            />
            <PhotoCard
              title="Гарри Поттер"
              fluid={data.maxPotter.childImageSharp.fluid}
            />
            <PhotoCard
              title="прогуливается"
              fluid={data.maxPalm.childImageSharp.fluid}
            />
          </Column>
          <Column>
            <Header>Она 💃</Header>
            <PhotoCard
              title="в Питере"
              fluid={data.alenaHappyStPeterburg.childImageSharp.fluid}
            />
            <PhotoCard
              title="открывает подарки"
              fluid={data.alenaOpenPresents.childImageSharp.fluid}
            />
            <PhotoCard
              title="у небоскреба"
              fluid={data.alenaScyscraper.childImageSharp.fluid}
            />
            <PhotoCard
              title="Белоснежка"
              fluid={data.alenaSnowwhite.childImageSharp.fluid}
            />
            <PhotoCard
              title="качается 💪"
              fluid={data.alenaSwing.childImageSharp.fluid}
            />
            <PhotoCard
              title="щупает курочек"
              fluid={data.alenaTouchingChicken.childImageSharp.fluid}
            />
            <PhotoCard
              title="с Адой 1"
              fluid={data.alenaWithCat1.childImageSharp.fluid}
            />
            <PhotoCard
              title="с Адой 2"
              fluid={data.alenaWithCat2.childImageSharp.fluid}
            />
          </Column>
        </Grid>
        <Column>
          <Header>ВМЕСТЕ</Header>
          <PhotoCard
            title="позируют"
            fluid={data.togetherTipsHat.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="в облаках"
            fluid={data.togetherClouds.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="шопятся"
            fluid={data.togetherAfimall.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="кормят уток"
            fluid={data.togetherFeedingDucks.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="любуются цветами"
            fluid={data.togetherSelfieFlowers.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="гуляют по Питеру"
            fluid={data.togetherStPeterburg.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="улыбаются"
            fluid={data.togetherHappyFaces.childImageSharp.fluid}
            wide
          />
          <video
            preload="auto"
            muted
            autoPlay
            loop
            poster={data.togetherHappyFaces}
            style={{
              width: '800px',
              borderRadius: '10px',
            }}
          >
            <source src="img/video/video.webm" type="video/webm" />
            <source src={data.togetherOffendedMp4.publicURL} type="video/mp4" />
          </video>
        </Column>
      </main>
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
    </div>
  )
}

export default IndexPage
