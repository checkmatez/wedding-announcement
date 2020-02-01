/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = '',
  lang = 'ru',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

// TODO
// <!--  Essential META Tags -->

// <meta property="og:title" content="European Travel Destinations">
// <meta property="og:description" content="Offering tour packages for individuals or groups.">
// <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
// <meta property="og:url" content="http://euro-travel-example.com/index.htm">
// <meta name="twitter:card" content="summary_large_image">

// <!--  Non-Essential, But Recommended -->

// <meta property="og:site_name" content="European Travel, Inc.">
// <meta name="twitter:image:alt" content="Alt text for image">

// <!--  Non-Essential, But Required for Analytics -->

// <meta property="fb:app_id" content="your_app_id" />
// <meta name="twitter:site" content="@website-username"></meta>

export default SEO
