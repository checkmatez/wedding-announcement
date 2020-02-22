import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'

import { PhotoCard } from '../components/photo-card'
import '../components/reset.css'
import SEO from '../components/seo'

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
`

const MainHeader = styled.h1`
  font-family: Caveat, Pacifico, cursive;
  font-size: 5rem;
  letter-spacing: 1px;
  max-width: 600px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

const Header = styled.h1`
  font-family: Marck Script, cursive;
  margin: 20px;
  letter-spacing: 1px;
  max-width: 600px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColorsContainer = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`

const Circle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 4px;
`

const Footer = styled.footer`
  background: rgb(2, 0, 36);
  margin-top: 1.45rem;
  width: 100%;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// justify-content: space-between;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const InvitationPage: React.FC = () => {
  const data = useStaticQuery(invitationPageQuery)

  return (
    <>
      <SEO title="Приглашение" />
      <Main>
        <Content>
          <Img
            fluid={data.vectorFlowers2.childImageSharp.fluid}
            style={{
              width: '40%',
              backgroundColor: 'hsla(201, 55%, 14%, 1);',
            }}
          />
          <MainHeader>Макс Давыдов</MainHeader>
          <MainHeader style={{ fontSize: '3rem' }}>и</MainHeader>
          <MainHeader>Алёна Харламова</MainHeader>
          <Header>приглашают вас на главное событие лета 2020!</Header>
          <Row>
            <Header>Где?</Header>
            <Header style={{ marginLeft: 'auto', textAlign: 'end' }}>
              Москва, ​Ленинский проспект, 44
            </Header>
          </Row>
          <Row>
            <Header>Когда?</Header>
            <Header style={{ marginLeft: 'auto' }}>27 июня 2020</Header>
          </Row>
          <Row>
            <Header>Начало в</Header>
            <Header style={{ marginLeft: 'auto' }}>11:00</Header>
          </Row>
          <Header>Поддержите нас на этом ярком и красивом празднике!</Header>
          <ColorsContainer>
            <Circle style={{ backgroundColor: `hsl(33, 100%, 88%)` }} />
            <Circle style={{ backgroundColor: `hsl(34, 57%, 70%)` }} />
            <Circle style={{ backgroundColor: `hsl(54, 77%, 75%)` }} />
            <Circle style={{ backgroundColor: `hsl(39, 54%, 43%)` }} />
            <Circle style={{ backgroundColor: `hsl(182, 25%, 50%)` }} />
            <Circle style={{ backgroundColor: `hsl(4, 82%, 56%)` }} />
            <Circle style={{ backgroundColor: `hsl(180, 82%, 7%)` }} />
          </ColorsContainer>
        </Content>
      </Main>
      <Footer>
        <Content>
          <StyledLink to="/">
            <p>На главную</p>
          </StyledLink>
        </Content>
      </Footer>
    </>
  )
}

const invitationPageQuery = graphql`
  query {
    vectorFlowers2: file(relativePath: { eq: "vector-flowers-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    colors: file(relativePath: { eq: "colors.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default InvitationPage
