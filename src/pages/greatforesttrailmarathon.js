import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GFTMHERO from "../components/gftmhero-img"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const GreatForest = () => (

    <Layout>
            <SEO title="Astrid" />
            <Container fluid className="project">
            <Row className="pt10">
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
                  <p className="hero-sentence black delay-2">
                 Running to save a wild place.</p>
                  </Col>
                  </Row>
                  <Row className="">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-1">Great Forest Trail Marathon</h2>
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
                       data-sal="fade"
                       data-sal-delay="500"
                       data-sal-easing="ease"
                       data-sal-duration="500">
                          <GFTMHERO className="border-50-no-hover"></GFTMHERO>
                  </div>
                  </Col>
                </Row>


                  <Row  className="pt1 sm-pt1">
                  <Col sm={12} md={6} xl={6} xxl={6}>
                  <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={8}>
                  <div className="project-info">
                  <p className="body black delay-1">
                    We worked with Astrid to define and build a brand that communicates Astrid’s values and stands apart in the quickly growing medicinal cannabis industry. 
                    We used a refined brand mark and functional secondary elements to achieve a balance between creativity and function across the brand.
                    </p>
                    <p className="body black text-indent delay-1 mb3 sm-mb0">
                    From there, we designed and built the Astrid website along with creating a suite of print and digital collateral.
                    </p>
                  </div>
                </Col> 
                <Col sm={12} className="pb1 delay-1"
                   data-sal="fade"
                   data-sal-delay="500"
                   data-sal-easing="ease"
                   data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_01.jpg"
                      />
                </Col> 
                <Col sm={12} md={6} className="pb1 delay-1"
                  data-sal="fade"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                  data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_02.png"
                      />
                </Col> 
                <Col sm={12} md={6} className="pb1 delay-1"
                     data-sal="fade"
                     data-sal-delay="500"
                     data-sal-easing="ease"
                     data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_03.png"
                      />
                </Col> 


                <div className="project-info-wrapper two">

                  <Col sm={6}        data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500">
                  <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
                  </Col>
                  <Col sm={6}        data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500">
                  <p className="body black copy-delay-1">
                    The dispensary space, designed by <a target="_blank" href="https://altestudio.com.au/">Alte. Studio</a>, needed to have a close relationship with the visual identity, creating a cohesive experience for patients and customers. 
              
                  </p>
                  <p className="body text-indent"        data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500">
                  Colour is used, along with proportion and material to create the connection between space and brand. 
                  Subtle use of brand assets in the space, along with signage on the exterior of the building also emphasise the visual links. 
                  </p>
                  </Col>
                  </div>

                  <Col sm={12} md={6}className="pb1 delay-1"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_04.jpg"
                      />
                </Col> 
                <Col sm={12} md={6}className="pb1 delay-1"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_05.jpg"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
                 data-sal="fade"
                 data-sal-delay="100"
                 data-sal-easing="ease"
                 data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_06.jpg"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
                 data-sal="fade"
                 data-sal-delay="100"
                 data-sal-easing="ease"
                 data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_07.jpg"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
               data-sal="fade"
               data-sal-delay="100"
               data-sal-easing="ease"
               data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_08-1.jpg"
                      />
                </Col> 
                <Col sm={12} md={6}className="pb1 delay-1"
                     data-sal="fade"
                     data-sal-delay="100"
                     data-sal-easing="ease"
                     data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_08.jpg"
                      />
                </Col> 
                <Col sm={12} md={6}className="pb1 delay-1"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_09.jpg"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_hero.jpg"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_10.jpg"
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

export default GreatForest


