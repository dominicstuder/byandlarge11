import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG from "../components/backgroundimage1"

import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const MasterMe = () => (

    <Layout>
            <SEO title="Master Me" />
            <Container fluid className="project">
            <Row className="pt10">
                  {/* <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
                  <p className="hero-sentence black delay-2">
                  Branding and website for a coaching course for creative professionals.</p>
                  </Col> */}
                  </Row>
                  <Row className="">
                  <Col xs={12} sm={10}>
                    <h2 className="small-header black delay-1">Master Me</h2>
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
                          <BGIMG className="border-50-no-hover"></BGIMG>
                  </div>
                  </Col>
   


                  {/* <Row  className="pt6 sm-pt1">
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

                <Col sm={12} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_04.webp"
                      />
                </Col> 
                <Col sm={12} md={6} className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_02.webp"
                      />
                </Col> 
                <Col sm={12} md={6}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_03.webp"
                      />
                </Col> 


                {/* <div className="project-info-wrapper mt3 mb3 two">

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

                  <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_05.webp"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_06.webp"
                      />
                </Col> 
                {/* <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_05.webp"
                      />
                </Col>  */}
                <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_09.webp"
                      />
                </Col> 
                <Col sm={12} md={12}className="pb1 delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                   <StaticImage
                      alt=""
                      src="../images/mm_10.webp"
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
                          to="/greatforesttrailmarathon"
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

export default MasterMe


