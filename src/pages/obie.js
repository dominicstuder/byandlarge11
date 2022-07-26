import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG6 from "../components/backgroundimage6"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Obie = () => (

    <Layout>
            <SEO title="Astrid" />
            <Container fluid className="project">
            <Row className="pt10">
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
                  <p className="hero-sentence black delay-2">
                  Financial tools to help everyday people.</p>
                  </Col>
                  </Row>
                  <Row className="">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-3">Obie</h2>
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
                          data-sal="fade"
                          data-sal-delay="400"
                          data-sal-easing="ease-in" >
                          <BGIMG6 className="border-50-no-hover"></BGIMG6>
                  </div>
                  </Col>
                <Col sm={12}  md={6} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/obie_1.png"
                      />
                </Col> 
                <Col sm={12}  md={6} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/obie_2.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/obie_3.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/obie_5.png"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/obie_6.png"
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
                          to="/drivechange"
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

export default Obie


