import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system';
import Footer from "../components/footer"

setConfiguration({ gutterWidth:'20'});


const Contact = () => {
  return (
    <>
      <SEO title="Contact" />

      <Container fluid className="pt10 pb10 sm-pt5 delay-1">
         <Row justify="start">
            <Col sm={12} lg={6}>
            <h1 className="header-2" > Get in touch if you would like to talk about a project or work opportunities.</h1>
            </Col>
            <Col sm={12} lg={4}>
            <p className="body"><a href="mailto:mail@byandlarge.studio">mail@byandlarge.studio</a></p>
            <p className="body">+61 (0) 410 819 455</p>
            </Col>
            </Row>
        </Container>
        <Footer/>
    </>
  )
}

export default Contact

