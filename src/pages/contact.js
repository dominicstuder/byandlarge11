import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system';

setConfiguration({ gutterWidth:'30'});


const Contact = () => {
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Contact" />

      <Container fluid className="video-container pt5 sm-pt5">
         <Row justify="start" style={{
                position: 'relative',
                marginTop: '5rem',
                minHeight: '80vh',
            }} >
            <Col sm={12} lg={8}>
            {/* <h2 className="header-1 black delay-1">Contact</h2> */}
            <p className="small-header delay-2" > Get in touch if you would like to talk about a potential project or work opportunities.</p>
            <p className="small-header  delay-3"><a href="mailto:mail@byandlarge.studio">mail@byandlarge.studio</a></p>
            </Col>
            </Row>
        </Container>
    </Layout>
  )
}

export default Contact

