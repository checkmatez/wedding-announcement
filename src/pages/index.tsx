import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'

import { PhotoCard } from '../components/photo-card'
import '../components/reset.css'
import SEO from '../components/seo'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  background-color: hsla(0, 0%, 0%, 0.4);
  height: 40px;
  top: 0px;
  left: 0px;
  right: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Paragraph = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px black;
  margin: 0;
`

const SimpleText = styled.p`
  padding: 0.5rem 0.5rem;
  color: white;
  margin: 0;
`

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
  &:hover {
    text-decoration: underline;
  }
`

const Footer = styled.footer`
  width: 100%;
  background: rgb(2, 0, 36);
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

const IndexPage: React.FC = () => {
  const data = useStaticQuery(indexPageQuery)

  return (
    <div>
      <SEO title="Свадьба" />
      <StyledHeader>
        <StyledLink to="/">
          <Img
            fixed={data.logo.childImageSharp.fixed}
            style={{
              width: '50px',
              height: '50px',
              marginLeft: '1rem',
              marginRight: '1.5rem',
              objectFit: 'contain',
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
          <Center>
            <h2
              style={{
                margin: 0,
                fontFamily: `Bad Script`,
                letterSpacing: '2px',
                lineHeight: '3rem',
              }}
            >
              {data.site.siteMetadata.title}
            </h2>
          </Center>
        </StyledLink>
      </StyledHeader>
      <Main>
        <Hero>
          <iframe
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
            src="https://www.youtube.com/embed/zpt65FIcxUs?autoplay=1&controls=1&disablekb=1&fs=0&hl=ru-Ru&loop=1&mute=1&modestbranding=1&iv_load_policy=3"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Hero>
        <Grid>
          <Column>
            <Header>Он 👨‍💻</Header>
            <PhotoCard
              title="Робин Гуд 🦸‍♂️"
              fluid={data.maxArcher.childImageSharp.fluid}
            />
            <PhotoCard
              title="Спасает кошечек 😸"
              fluid={data.maxAda.childImageSharp.fluid}
            />
            <PhotoCard
              title="Курит сигары 🚬"
              fluid={data.maxCigar.childImageSharp.fluid}
            />
            <PhotoCard
              title="Гоняет на джипах 🚗"
              fluid={data.maxDriving.childImageSharp.fluid}
            />
            <PhotoCard
              title="Гарри Поттер 🧙‍♂️"
              fluid={data.maxPotter.childImageSharp.fluid}
            />
            <PhotoCard
              title="Прогуливается 🚶‍♂️"
              fluid={data.maxPalm.childImageSharp.fluid}
            />
          </Column>
          <Column>
            <Header>Она 💃</Header>
            <PhotoCard
              title="С цветочками 🌺"
              fluid={data.alenaFlowers.childImageSharp.fluid}
            />
            <PhotoCard
              title="Радуется солнышку ☀️"
              fluid={data.alenaKazanskiySobor.childImageSharp.fluid}
            />
            <PhotoCard
              title="Лазает по деревьям 🌳"
              fluid={data.alenaTree.childImageSharp.fluid}
            />
            <PhotoCard
              title="Готовится нырять 🤿"
              fluid={data.alenaWaterChannel.childImageSharp.fluid}
            />
            <PhotoCard
              title="Открывает подарки 🎁"
              fluid={data.alenaOpenPresents.childImageSharp.fluid}
            />
            <PhotoCard
              title="Белоснежка ❄️"
              fluid={data.alenaSnowwhite.childImageSharp.fluid}
            />
            <PhotoCard
              title="Качается 💪"
              fluid={data.alenaSwing.childImageSharp.fluid}
            />
            <PhotoCard
              title="Щупает курочек 🐔"
              fluid={data.alenaTouchingChicken.childImageSharp.fluid}
            />
            <PhotoCard
              title="Позирует c 😼"
              fluid={data.alenaWithCat2.childImageSharp.fluid}
            />
          </Column>
        </Grid>
        <Column>
          <Header>ВМЕСТЕ 👩‍❤️‍👨</Header>
          <PhotoCard
            title="На отдыхе 🌴"
            fluid={data.togetherTipsHat.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Ножки 👣"
            fluid={data.feetStPeterburg.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Любят мороженное 🍨"
            fluid={data.skullMonro.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Высокогорный кусь 😗"
            fluid={data.togetherCheekKiss.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Вдохновляются поэзией 🗽"
            fluid={data.togetherMedniyVsadnik.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Учатся у титанов 📜"
            fluid={data.togetherTitans.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="На вершине мира ⛰️"
            fluid={data.togetherClouds.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Шопятся 🛍️"
            fluid={data.togetherAfimall.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Кормят уток 🦆"
            fluid={data.togetherFeedingDucks.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Любуются цветами 💐"
            fluid={data.togetherSelfieFlowers.childImageSharp.fluid}
            wide
          />
          <PhotoCard
            title="Улыбаются 😃"
            fluid={data.togetherHappyFaces.childImageSharp.fluid}
            wide
          />
          <div style={{ position: 'relative' }}>
            <video
              preload="auto"
              muted
              autoPlay
              loop
              poster={data.togetherHappyFaces}
              style={{
                width: '100%',
                maxWidth: '800px',
                borderRadius: '10px',
              }}
            >
              <source
                src={data.togetherOffendedMp4.publicURL}
                type="video/mp4"
              />
            </video>
            <Wrapper>
              <Paragraph>🙄</Paragraph>
            </Wrapper>
          </div>
        </Column>
      </Main>
      <Footer>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 600,
            padding: `1.45rem 1.0875rem`,
            color: 'white',
          }}
        >
          <StyledLink
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              textDecoration: 'underline',
            }}
            to="/ada-the-cat"
          >
            <span style={{ fontSize: '1.5rem' }}>
              А еще у нас есть кошка-программист!
            </span>
          </StyledLink>
          <SimpleText>
            Все права защищены © {new Date().getFullYear()}
          </SimpleText>
        </div>
      </Footer>
    </div>
  )
}

const indexPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(relativePath: { eq: "rings.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    alenaFlowers: file(relativePath: { eq: "alena-flowers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alenaKazanskiySobor: file(
      relativePath: { eq: "alena-kazanskiy-sobor.jpg" }
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
    alenaTree: file(relativePath: { eq: "alena-tree.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    alenaWaterChannel: file(relativePath: { eq: "alena-water-channel.jpg" }) {
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
    feetStPeterburg: file(relativePath: { eq: "feet-st-peterburg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maxAda: file(relativePath: { eq: "max-ada.jpg" }) {
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
    maxCigar: file(relativePath: { eq: "max-cigar.jpg" }) {
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
    skullMonro: file(relativePath: { eq: "skull-monro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
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
    togetherCheekKiss: file(relativePath: { eq: "together-cheek-kiss.jpg" }) {
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
    togetherTipsHat: file(relativePath: { eq: "together-tips-hat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    togetherHappyFaces: file(relativePath: { eq: "together-happy-faces.png" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    togetherMedniyVsadnik: file(
      relativePath: { eq: "together-medniy-vsadnik.jpg" }
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
    togetherClouds: file(relativePath: { eq: "together-clouds.jpg" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    togetherTitans: file(relativePath: { eq: "together-titans.jpg" }) {
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
`

export default IndexPage
