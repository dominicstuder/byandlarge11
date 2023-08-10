
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Thirdclock from "../components/thirdclock.js";
import TransitionLink from "gatsby-plugin-transition-link"


const Header = ({ siteTitle }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
  // <header className="header">
    <header className={scroll ? "header bg-black" : "header bg-none"}>
      <Container fluid>
      <Row>
      <Col xs={6} sm={6} md={6} lg={6} >
            <div className="logo">
              <AniLink
                  to="/" 
                  exit={{
                    length: .1
                  }}
                  entry={{
                    delay: .1
                  }}
                >Studio By and Large 
              </AniLink>
            </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
            <nav className="menu two">
            <div className="item-two"><AniLink
                    to="/work" 
                    exit={{
                      length: .1
                    }}
                    entry={{
                      delay: .1
                    }}
                  ><span>Work</span></AniLink></div>
                  
                  <div className="item-two"><AniLink
                    to="/contact" 
                    exit={{
                      length: .1
                    }}
                    entry={{
                      delay: .1
                    }}
                  ><span>Contact</span></AniLink></div>
          
            {/* <div className="clock-wrapper">
                <div className="item-two">
                  <Thirdclock />
                </div>
            </div> */}
            </nav>
            </Col>
            {/* <Col xs={4} sm={4} md={4} lg={4} style={{}} className="clock-wrapper">
                <div className="item-two">
                  <Thirdclock />
                </div>
            </Col> */}
       </Row>
    </Container>
  </header>
  )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

