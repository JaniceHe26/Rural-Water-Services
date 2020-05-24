import { Link } from "gatsby"
/** 
 * @jsx jsx  - referenced by "sx".
 * Controls the apps theme colors.
 * See ../gatsby-plugin-theme-ui/index.js
 */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "primary",
    }}
  >
    <div
      sx={{
        margin: "0 auto",
        padding: "1.5rem 1.0rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: "headerText",
            fontSize: 48,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
