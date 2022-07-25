import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import IMG from "../components/backgroundimage5"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Musk = () => (

    <Layout>
            <SEO title="Astrid" />
            <Container fluid className="project">
            <Row className="pt10">
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
                  <p className="hero-sentence black delay-2">
                  An artist residency and boutique hotel in Dayelsford, Victoria.</p>
                  </Col>
                  </Row>
                  <Row className="">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-3">Musk</h2>
                  </Col>

                  </Row>
            <Row justify="start" style={{
                  position: 'relative',
              }} 
              className="">
                <Col sm={12} className="delay-3 mt pb1" style={{
                    position: 'relative',
                }}>
          
                  <div className="work-page-image-wrapper" 
                        data-sal-duration="500"
                          data-sal="slide-up"
                          data-sal-delay="400"
                          data-sal-easing="ease-in" >
                          <IMG className="border-50-no-hover"></IMG>
                  </div>
                  </Col>
                </Row>


                  <Row  className="pt6 sm-pt1">
                  <Col sm={12} md={6} xl={6} xxl={6}>
                  <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={8}>
                  <div className="project-info">
                  <p className="body black delay-1">
                    We worked with Astrid to define and build a brand that communicates Astrid’s values and stands apart in the quickly growing medicinal cannabis industry. 
                    We used a refined brand mark and functional secondary elements to achieve a balance between creativity and function across the brand.
                    </p>
                    <p className="body black text-indent delay-1 mb3">
                    From there, we designed and built the Astrid website along with creating a suite of print and digital collateral.
                    </p>
                  </div>
                </Col> 
                </Row>
                <Row justify="end" style={{
                  marginTop: '3rem',
              }}>
                <Col sm={12}  md={12} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_01.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_02.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_03.png"
                      />
                </Col>
                <Col sm={12}  md={12} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_04.png"
                      />
                </Col> 
                <Col sm={12}  md={6} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_05.png"
                      />
                </Col> 
                <Col sm={12}  md={6} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_06.png"
                      />
                </Col> 
                <Col sm={12}  md={6} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_09.png"
                      />
                </Col> 
                <Col sm={12}  md={6} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_10.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/mu_11.png"
                      />
                </Col> 
            </Row>
            <Row className="mt2 page-links">
              <Col sm={6} className="delay-1"  style={{
                      marginBottom: '1rem',
                  }}>
                    
                      <p className="body">
                      <AniLink
                          to="/work"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        >   
                        Back to Our Work
                        </AniLink>
                      </p>  
                  
              </Col>
              <Col sm={6} className="delay-1" style={{
                      marginBottom: '1rem',
                  }}>
                          
                    <p className="body">
                    <AniLink
                          to="/masterme"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        >  
                    Next Project
                    </AniLink>
                    </p>
                
              </Col>
            </Row>
        </Container>
    </Layout>

)

export default Musk


