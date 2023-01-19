import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG7 from "../components/backgroundimage7"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Drivechange = () => (

    <Layout>
            <SEO title="Drive Change" />
            <Container fluid className="project">
            <Row className="pt10">
                  
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-1">Drive Change</h2>
                  </Col>

                  </Row>
            <Row justify="start" style={{
                  position: 'relative',
              }} 
              className="">

                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/dc_hero.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/new_dc_01.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/dc2.2.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/dc_4.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/new_dc_02.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/new_dc_03.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} xxl={6} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/new_dc_05.webp"
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
                          to="/musk"
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

export default Drivechange


