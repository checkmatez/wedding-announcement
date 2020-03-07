import * as React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  color: white;
  text-decoration: underline;
  display: flex;
  flex-direction: row;
`

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Страница не найдена</h1>
    <p>Похоже вы зашли не туда...</p>
    <StyledLink to="/">
      <span style={{ fontSize: '1.5rem' }}>На главную</span>
    </StyledLink>
  </Layout>
)

export default NotFoundPage
