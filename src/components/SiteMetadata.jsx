import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

export const SiteMetadata = ({ description, image, title }) => {
  const {
    site: {
      siteMetadata: { locale, siteTitle },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          locale
          siteTitle: title
        }
      }
    }
  `)

  return (
    <Helmet
      defer={false}
      defaultTitle={siteTitle}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={locale} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://media-virus.netlify.app/" />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={`https://media-virus.netlify.app${image}`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@pitang1965" />
      <meta property="fb:app_id" content="345487946694410" />
    </Helmet>
  )
}

SiteMetadata.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

SiteMetadata.defaultProps = {
  image: "/social.png",
}
