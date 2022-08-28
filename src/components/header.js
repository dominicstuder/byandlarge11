
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ArrowWhite from "../assets/arrow-small-white.svg";

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
      {/* <Col xs={12} sm={12} md={12} lg={12} style={{marginTop: '1em',}}>
      <div className="primary-button contact-button slideup-contact"><AniLink
                    to="/contact"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">Contact</span></AniLink>
              </div>
      </Col> */}
      <Col xs={12} sm={12} md={4} lg={4} >
            <div className="logo">
              <AniLink
                  to="/" 
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                >By and Large Studio
              </AniLink>
            </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={4} style={{}}>
            <nav className="menu two delay-2">
            <div className="item-two"><AniLink
                    to="/" 
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><span data-hover="Home">Home</span></AniLink></div>
            {/* <div className="item-two"><AniLink
                    to="/studio" 
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><span data-hover="Studio">Studio</span></AniLink></div> */}
              <div className="item-two"><AniLink
                    to="/work"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><span data-hover="Work">Work</span></AniLink></div>
                {/* <div className="item-two"><AniLink
                    cover  to="/studio" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >Studio</AniLink></div> */}
                {/* <div className="item-two"><AniLink
                    to="/contact"
                    exit={{ length: 0.1 }}
                    entry={{ delay: 0.1 }}
                  ><span data-hover="Contact">Contact</span></AniLink></div> */}
            </nav>

              {/* <div className="primary-button contact-button delay-1"><AniLink
                    to="/contact"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">Contact us</span></AniLink>
              </div> */}
            </Col>
            <Col xs={6} sm={6} md={3} lg={3} style={{}}>
            <nav className="menu two delay-2">
            <div className="item-two"><AniLink
                    to="/contact" 
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  ><span data-hover="Contact">Contact</span></AniLink></div>
            </nav>
            
            </Col>
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

