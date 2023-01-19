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
        <footer style={{
          paddingBottom: '.5em',
        }}
        className="delay-1"
        >
        <Container fluid >
           <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '5em',
          }}>
            <Col  xs={6} sm={6} md={6}><div style={{
            
          }}className="small-copy delay-1">

                <p>
               Opening hours<br></br>
               Mo–Fr: 9AM - 5PM
                </p>
                <p>
                NSW, Australia
                </p>
                </div>
            </Col>
             <Col  xs={6} sm={3} md={3}><div style={{
            
            }}className="small-copy delay-1">
                <a href="mailto:mail@byandlarge.studio">
                  <p>
                    Contact<br></br>
                  mail@byandlarge.studio
                  </p>
                  </a>
            
                  </div>
              </Col>
              <Col  xs={6} sm={3} md={3}><div style={{
            
          }}className="small-copy delay-1">

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/studiobyandlarge/">
            <p>
            Socials<br></br>
              @studiobyandlarge 
              </p>
            </a>
          
                </div>
            </Col>
            
            
              </Row>
              <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '2em',
          }}>
              <Col  xs={12} sm={4}><div style={{
            
          }}className="small-copy delay-1">
            <p>
                    By and Large Studio is on the traditional country of the Awabakal and Worimi peoples. We recognize and respect their cultural heritage, beliefs and continuing relationship with the land.<br></br>
                    </p>
                </div>
            </Col>

             <Col  xs={12} sm={12} md={12}><div style={{
            
            }}className="small-copy delay-1 pt1">
                      <span className="copyright"> <p>&#169;2023 Studio By and Large</p></span>
                  </div>
              </Col>
            </Row>
        </Container>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// document.getElementById("root")

export default Layout


