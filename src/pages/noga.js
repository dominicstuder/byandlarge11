import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG12 from "../components/backgroundimage12"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Noga = () => (

    <Layout>
            <SEO title="Noga" />
            <Container fluid className="project">
            <Row className="pt10">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-1">Noga</h2>
                  </Col>

                  </Row>
            <Row justify="start" style={{
                  position: 'relative',
              }} 
              className="">
                <Col sm={12} className="delay-1 mt pb1" style={{
                    position: 'relative',
                }}>
          
                  <div className="work-page-image-wrapper" 
                        data-sal-duration="100"
                          data-sal="fade"
                          data-sal-delay="100"
                          data-sal-easing="ease-in" >
                          <BGIMG12 className="border-50-no-hover"></BGIMG12>
                  </div>
                  </Col>
                </Row>
                <Row justify="stretch" style={{
                  marginTop: '3rem',
              }}>
                <Col sm={12} md={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Astrid logo on colourful background"
                      src="../images/noga_02.webp"
                      />
                </Col> 
                <Col sm={6} md={4} offset={{md: 2}} className="pb1 mt2 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_phone_01.webp"
                      />
                </Col> 
                <Col sm={6} md={4} className="pb1 delay-1 mt10"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_03.webp"
                      />
                </Col> 
                </Row>
                <Row justify="stretch" style={{
                  marginTop: '3rem',
              }}>
                <Col sm={6} md={4} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Astrid logo on colourful background"
                      src="../images/noga_04.webp"
                      />
                </Col> 
                <Col sm={6} md={3} offset={{md: 4}} className="pb1 delay-1 mt4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_05.webp"
                      />
                </Col> 
                <Col sm={12} md={12} className="pb1 delay-1 mt4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_06.webp"
                      />
                </Col> 
                <Col sm={6} md={4} offset={{md: 2}} className="pb1  mt2 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_09.webp"
                      />
                </Col> 
                <Col sm={6} md={4} className="pb1 delay-1 sm-mt2 mt10"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_10.webp"
                      />
                </Col> 
                <Col sm={12} md={12} className="pb1 delay-1 mt4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_07.webp"
                      />
                </Col> 

                <Col sm={12} md={12} className="pb1 delay-1 mt4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_08.webp"
                      />
                </Col> 
             
                <Col sm={12} md={12} className="pb1 delay-1 mt4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/noga_11.webp"
                      />
                </Col> 
             
            </Row>
            <Row className="mt2 page-links">
              <Col sm={6} className="delay-1"  style={{
                      marginBottom: '1rem',
                  }}>
                    
                    <div class="primary-button">
                      <AniLink
                          to="/work"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        >   
                        Back to Our Work
                        </AniLink>
                      </div>
                  
              </Col>
              <Col sm={6} className="delay-1" style={{
                      marginBottom: '1rem',
                  }}>
                          
                    <div class="primary-button">
                    <AniLink
                          to="/masterme"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        >  
                    Next Project
                    </AniLink>
                   </div>
              </Col>
            </Row>
        </Container>
    </Layout>

)

export default Noga


