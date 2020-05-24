/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
/** 
 * @jsx jsx  - referenced by "sx".
 * Controls the apps theme colors.
 * See ../gatsby-plugin-theme-ui/index.js
 */
import { jsx } from "theme-ui"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        sx={{
          bottom: "0",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          position: "absolute",
          width: "100%",
          backgroundColor: "primary",
          color: "bodyText",
        }}
      >
        <span>Wellsville, Kansas</span>
        <span>(913)238-0876</span>
        <span>ruralwater6@gmail.com</span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
