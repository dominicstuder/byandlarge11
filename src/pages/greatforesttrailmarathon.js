import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system';
import GFTMHERO from "../components/gftmhero-img"

setConfiguration({ gutterWidth:'30'});


const GreatForest = () => (

    <Layout>
            <SEO title="GFTM" />
            <Container fluid className="project">
                 
            <Row justify="start" style={{
                  position: 'relative',
              }} 
              className="pt10">
                  <Col xs={12} sm={6}>
                    <h1 className="header-2 black delay-1">Great Forest Trail Marathon</h1>
                  </Col>
                  <Col xs={12} sm={6}>
                    <p className="body black delay-1">Branding for a trail running event that's saving a wild place.</p>
                  </Col>
                <Col sm={12} className="delay-1 pb1" style={{
                    position: 'relative',
                }}>
          
                  <div className="work-page-image-wrapper" 
                        data-sal-duration="100"
                          data-sal-delay="100"
                          data-sal-easing="ease-in" >
                          <GFTMHERO className="border-50-no-hover"></GFTMHERO>
                  </div>
                  </Col>
                </Row>
                <Row className="pt1">
                <Col sm={12} xxl={6} className="pb1 delay-1"
                   data-sal="fade"
                   data-sal-delay="500"
                   data-sal-easing="ease"
                   data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_01.webp"
                      />
                </Col> 
                <Col sm={12} md={12} xxl={6} className="pb1 delay-1"
                  data-sal="fade"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                  data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_03.webp"
                      />
                </Col> 



                {/* <div className="project-info-wrapper two">

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
                  </div> */}

          <Col sm={12} md={12} xxl={6} className="pb1 delay-1"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_04.webp"
                      />
                </Col> 
                {/* <Col sm={12} md={12} xxl={6} className="pb1 delay-1"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
              data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_05.webp"
                      />
                </Col>  */}
                <Col sm={12} md={12} xxl={6} className="pb1 delay-1"
                 data-sal="fade"
                 data-sal-delay="100"
                 data-sal-easing="ease"
                 data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_06.webp"
                      />
                </Col> 
                <Col sm={12} md={12} xxl={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_01.1.webp"
                      />
                </Col> 

                <Col sm={12} md={6} xxl={6} className="pb1 delay-1"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_07.webp"
                      />
                </Col> 
                <Col sm={12} md={6} xxl={6} className="pb1 delay-1"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="500">
                   <StaticImage
                      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                      src="../images/gftm_08.webp"
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
              
            </Row>
        </Container>
    </Layout>

)

export default GreatForest


