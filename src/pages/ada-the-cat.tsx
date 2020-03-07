import { graphql, Link, useStaticQuery } from 'gatsby'
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

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: underline;
  display: flex;
  flex-direction: row;
`

const ExternalLink = styled.a`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: underline;
  display: inline-flex;
  flex-direction: row;
`

const SimpleText = styled.p`
  padding: 0.5rem 0.5rem;
  color: white;
  margin: 0;
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

const AdaTheCatPage: React.FC = () => {
  const data = useStaticQuery(adaPageQuery)

  return (
    <div>
      <SEO title="Ада" />
      <Column>
        <Header>
          <ExternalLink
            href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B2%D0%BB%D0%B5%D0%B9%D1%81,_%D0%90%D0%B4%D0%B0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ада Лавлейс
          </ExternalLink>
        </Header>
        <PhotoCard
          title="Знакомлюсь с хозяином 🏠"
          fluid={data.maxAda.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Я еще маленькая 🐱"
          fluid={data.catSmall.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Готовлюсь к броску 🐾"
          fluid={data.catReadyToPounce.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="А так я сплю 😴"
          fluid={data.catLyingAtTable.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Или так 🙃"
          fluid={data.catUpsideDownSleeping.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Иногда стесняюсь ☺️"
          fluid={data.catShyWithBall.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Такие вот ножки 🍗"
          fluid={data.catBetweenMaxAndPillow.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Изучаю Windows 🖥️"
          fluid={data.catPosing.childImageSharp.fluid}
          wide
        />
        <PhotoCard
          title="Почешите пузико 😺"
          fluid={data.catUpsideDownSmirk.childImageSharp.fluid}
          wide
        />
        <div style={{ position: 'relative' }}>
          <video
            preload="auto"
            autoPlay
            loop
            poster={data.togetherHappyFaces}
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: '10px',
            }}
          >
            <source src={data.catSadMusic.publicURL} type="video/mp4" />
          </video>
          <Wrapper>
            <Paragraph>Жду хозяев из отпуска 😩</Paragraph>
          </Wrapper>
        </div>
      </Column>
      <Footer>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 600,
            padding: `1.45rem 1.0875rem`,
            color: 'white',
          }}
        >
          <StyledLink to="/">
            <span style={{ fontSize: '1.5rem' }}>На главную</span>
          </StyledLink>
          <SimpleText>
            Все права защищены © {new Date().getFullYear()}
          </SimpleText>
        </div>
      </Footer>
    </div>
  )
}

const adaPageQuery = graphql`
  query {
    catBetweenMaxAndPillow: file(
      relativePath: { eq: "cat-between-max-and-pillow.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catLyingAtTable: file(relativePath: { eq: "cat-lying-at-table.jpg" }) {
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
    catReadyToPounce: file(relativePath: { eq: "cat-ready-to-pounce.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catShyWithBall: file(relativePath: { eq: "cat-shy-with-ball.jpg" }) {
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
    catUpsideDownSleeping: file(
      relativePath: { eq: "cat-upside-down-sleeping.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catUpsideDownSmirk: file(
      relativePath: { eq: "cat-upside-down-smirk.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
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
    catSadMusic: file(relativePath: { eq: "cat-sad-music.mp4" }) {
      publicURL
    }
  }
`

export default AdaTheCatPage
