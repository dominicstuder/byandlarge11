import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG10 from "../components/backgroundimage10"
import Footer from "../components/footer"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'20'});


const Astrid = () => (

    <>
            <SEO title="Astrid" />
            <Container fluid className="project">
            <Row className="pt10 pb2">
            <Col xs={12} sm={6}>
                    <h1 className="header-2  black delay-1">Astrid</h1>
                  </Col>
                  <Col xs={12} sm={6}>
                    <p className="body black delay-1">Strategy, branding and website for a plant based medicines dispensary.</p>
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
                    data-sal-duration="50"
                    data-sal="fade"
                      data-sal-easing="ease-in" >
                          <BGIMG10 className="border-50-no-hover"></BGIMG10>
                  </div>
                  </Col>
                </Row>

                  {/* <Row  className="pt1 sm-pt1">
                
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
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
                </Row> */}
                <Row justify="stretch">
                <Col sm={12} md={4} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Astrid logo on colourful background"
                      src="../images/astrid_new_1.webp"
                      />
                </Col> 
                <Col sm={12} md={4} offset={{md: 2}} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_new_2.webp"
                      />
                </Col> 
                <Col sm={12} md={12} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_new_05.webp"
                      />
                </Col> 
                </Row>
                <Row justify="stretch" style={{
                  marginTop: '3rem',
              }}>
                <Col sm={12} md={4} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Astrid logo on colourful background"
                      src="../images/astrid_new_03.webp"
                      />
                </Col> 
                <Col sm={12} md={3} offset={{md: 4}} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_new_04.webp"
                      />
                </Col> 
                <Col sm={12} md={5} offset={{md: 1}} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_15.png"
                      />
                </Col> 
                <Col sm={12} md={5} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_16.png"
                      />
                </Col> 

                <Col sm={12} md={6} offset={{md: 3}} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_new_12.webp"
                      />
                </Col> 
                <Col sm={12} md={6} className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_10.png"
                      />
                </Col> 
                <Col sm={12} md={6}  className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_11.png"
                      />
                </Col> 
                <Col sm={12} md={12}  className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_13.png"
                      />
                </Col> 
                <Col sm={12} md={12}  className="pb1 delay-1 mt4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/astrid_web_14.png"
                      />
                </Col> 
       
{/* 
                <div className="project-info-wrapper mt3 mb3 two">

                  <Col sm={6}>
                  <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
                  </Col>
                  <Col sm={6}>
                  <p className="body black copy-delay-1">
                    The dispensary space, designed by <a target="_blank" href="https://altestudio.com.au/">Alte. Studio</a>, needed to have a close relationship with the visual identity, creating a cohesive experience for patients and customers. 
              
                  </p>
                  <p className="body text-indent">
                  Colour is used, along with proportion and material to create the connection between space and brand. 
                  Subtle use of brand assets in the space, along with signage on the exterior of the building also emphasise the visual links. 
                  </p>
                  </Col>
                  </div> */}


                {/* <div className="project-image-group-wrapper pt5 pb5 delay-1">

                  <Col sm={4} className="mobile-view delay-1"
                  ata-sal-duration="500"
                  data-sal="fade"
                  data-sal-delay="400"
                  data-sal-easing="ease-in" 
                  >
                       <StaticImage
                      alt=""
                      src="../images/astrid_home_mobile_01.png"
                      />
                  </Col>             
                  <Col sm={4} className="mobile-view delay-1"
                  ata-sal-duration="500"
                  data-sal="fade"
                  data-sal-delay="400"
                  data-sal-easing="ease-in" 
                  >
                     <StaticImage
                      alt=""
                      src="../images/astrid_home_mobile_02.png"
                      />
                  </Col> 
                </div>
                <Col sm={12} md={6} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/astrid_letterhead.png"
                      />
                </Col> 
                <Col sm={12} md={6} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/astrid_cards.png"
                      />
                </Col> 

            </Row> */}
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
        <Footer/>
        </>
)

export default Astrid


