/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-grid-system';
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Arrow from "../assets/arrow.svg";
import Navbar from "./Navbar"
// import { ParallaxProvider } from 'react-scroll-parallax';


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
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> 
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 3000,
          padding: `0em`,
        }}
      >
  
        <main>{children}</main>
        
      </div>
      <Footer /> 
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// document.getElementById("root")

export default Layout


