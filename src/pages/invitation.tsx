import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'

import '../components/reset.css'
import SEO from '../components/seo'

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: none;
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

const MainHeader = styled.h1`
  font-family: Caveat, Pacifico, cursive;
  font-size: 5rem;
  letter-spacing: 1px;
  max-width: 600px;
  text-align: center;
  color: hsla(40, 87%, 54%);
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

const Header = styled.h1`
  font-family: Marck Script, cursive;
  margin: 20px 10px;
  letter-spacing: 1px;
  max-width: 600px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

const HeaderLeft = styled(Header)`
  text-align: left;
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
`

const Circle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 4px;
  border-width: 2px;
  border-color: white;
  border-style: solid;

  @media (min-width: 600px) {
    width: 60px;
    height: 60px;
  }
`

const Footer = styled.footer`
  background: rgb(2, 0, 36);
  margin-top: 1.45rem;
  width: 100%;
`

const Content = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  max-width: 600px;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

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
        <Img
          fluid={data.hollywood.childImageSharp.fluid}
          style={{
            width: '100%',
          }}
        />
        <Content>
          <MainHeader>Макс Давыдов</MainHeader>
          <MainHeader style={{ fontSize: '3rem', color: 'white' }}>
            и
          </MainHeader>
          <MainHeader>Алёна Харламова</MainHeader>
          <Header>приглашают тебя на свадьбу в Голливуд 🎥</Header>
          <Row>
            <HeaderLeft>Где?</HeaderLeft>
            <Header
              style={{
                marginLeft: 'auto',
                textAlign: 'end',
                color: 'hsla(40,87%,54%)',
              }}
            >
              Москва, ​ Ленинский проспект, 44
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Когда?</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              27-28 июня
            </Header>
          </Row>
          <Header>Программа 27.06</Header>
          <Row>
            <HeaderLeft>Сбор гостей</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              10:50
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Торжественная регистрация</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              11:00
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Трансфер до места</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              12:30
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Фуршет</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              14:00
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Банкет</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              16:00
            </Header>
          </Row>
          <Row>
            <HeaderLeft>Торт</HeaderLeft>
            <Header style={{ marginLeft: 'auto', color: 'hsla(40,87%,54%)' }}>
              21:00
            </Header>
          </Row>
          <Header>Программа 28.06</Header>
          <Header>
            Свободное время в жипописном уголке! Отдыхаем, веселимся,
            фотографируемся, играем!
          </Header>
          <Header>
            Делимся впечатлениями с хэштегом{' '}
            <Header
              style={{
                fontSize: '3rem',
                fontFamily: 'cursive',
                fontWeight: 'bold',
                color: 'hsla(40,87%,54%)',
              }}
            >
              #HDhollywood
            </Header>
          </Header>
          <Img
            fluid={data.doveOnBranch.childImageSharp.fluid}
            style={{
              width: '100%',
            }}
          />
          <Header>
            Обо всем необходимом мы позаботились, все что тебе нужно - это
            прийти!
          </Header>
          <Header>
            <span style={{ color: 'hsla(40,87%,54%)' }}>Поддержи</span> нас
            этими оттенками на ярком и красивом празднике!
          </Header>
          <ColorsContainer>
            <Circle style={{ backgroundColor: `hsl(32, 13%, 53%)` }} />
            <Circle style={{ backgroundColor: `hsl(34, 57%, 70%)` }} />
            <Circle style={{ backgroundColor: `hsl(54,56%, 80%)` }} />
            <Circle style={{ backgroundColor: `hsl(39, 54%, 43%)` }} />
            <Circle style={{ backgroundColor: `hsl(182, 25%, 50%)` }} />
            <Circle style={{ backgroundColor: `hsl(4, 82%, 56%)` }} />
            <Circle style={{ backgroundColor: `hsl(180, 82%, 7%)` }} />
          </ColorsContainer>
          <Header>
            <span style={{ color: 'hsla(40,87%,54%)' }}>Подпишись</span> на наш
            канал в Телеграмме, посвященный этому мероприятию и{' '}
            <ExternalLink
              href="https://t.me/joinchat/AAAAAFUQTdYnUMENowU-7Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              будь в курсе наших новостей и планов!
            </ExternalLink>
          </Header>
        </Content>
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
            to="/"
          >
            <span style={{ fontSize: '1.5rem' }}>Узнай о нас больше!</span>
          </StyledLink>
          <SimpleText>
            Все права защищены © {new Date().getFullYear()}
          </SimpleText>
        </div>
      </Footer>
    </>
  )
}

const invitationPageQuery = graphql`
  query {
    hollywood: file(relativePath: { eq: "once-upon-time-in-hollywood.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    doveOnBranch: file(relativePath: { eq: "dove-on-branch-white.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default InvitationPage
