import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG13 from "../components/backgroundimage13"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Lululemon = () => (

    <Layout>
            <SEO title="Lululemon" />
            <Container fluid className="project">
            <Row className="pt10">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-1">Lululemon - The Source</h2>
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
                          <BGIMG13 className="border-50-no-hover"></BGIMG13>
                  </div>
                  </Col>
             
{/* 

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
                </Row> */}

                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/lulu_01.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/lulu_03.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/lulu_04.webp"
                      />
                </Col> 
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/thesource_lululemon_t4_fs_01.jpg"
                      />
                </Col> 
                
                <Col sm={12}  md={12} className="pb1 delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/lulu_05.webp"
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

export default Lululemon


