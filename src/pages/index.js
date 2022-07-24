import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import clip from '../assets/newfeature.mp4'; 
import astridthumb from '../assets/astrid_thumb.mp4'; 
import dcthumb from '../assets/dc_thumb2.mp4'; 
import { setConfiguration } from 'react-grid-system';
import BGIMG from "../components/backgroundimage1"
import BGIMG10 from "../components/backgroundimage10"
import GFTMHERO from "../components/gftmhero-img"
setConfiguration({ gutterWidth:'30'});


const IndexPage = () => {
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Home" />

      <Container fluid className="video-container">
      <Row justify="start" style={{
                 marginTop: '4em',
                }} className="video-section mt4 sm-mt3">
                  <Col md={12} lg={12} xl={12} xxl={12}  style={{
                    position: 'relative',
              
                  }}
                  className="">
          
        
                  <div className="video-wrapper delay-2" style={{
                        
                        }}>
                           <AniLink
                    to="/work"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >     
                    <video autoPlay loop muted className="background-video">
                            <source src={clip} type='video/mp4' />
                    </video>
                    </AniLink>
                  </div>
      
                 </Col>
                </Row>
                 
             <Row justify="start" style={{
         
                }} className="home-page-intro mt10 sm-mt2">
                  <Col sm={12} lg={3} xl={3} xxl={3} className="small-header">About us</Col>
                   <Col sm={12} md={10} lg={7} xl={7} xxl={7} style={{
                      position: 'relative',
              
                    }}
                    data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    > <h1 
                    className="body medium delay-1">
                      By and Large is an independent, multidisciplinary design studio. We create impact through creative and considered strategy, design, content creation and use of technology.
                    </h1>
                    <h1 
                    className="body medium delay-1">
                      Currently based in Newcastle, we work with clients around Australia and beyond.
                    </h1>
                      </Col>
                  </Row>
                
          </Container>
          <Container fluid className="section-3">
              <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                {/* <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-4">
                  <h3 className="small-body-copy">Capabilities</h3>
                </Col> */}
                <Col  md={12} lg={3} xl={3} xxl={3}  className="delay-5 pb3 sm-pb1"

              >
                <div 
                  data-sal="fade"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                >
                  <span className="small-header">What we do</span>
                  </div>
                </Col>
                <Col md={12} lg={3} xl={3} xxl={3}
               
                >
                      <div                   
                      data-sal="fade"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                  <ul className="services-list delay-5">
                      <li className="small-header">Strategy</li>
                      <li>Brand Strategy</li>
                      <li>UX Strategy</li>
                      <li>Information Architecture</li>
                      <li>Content Strategy</li>
                      <li>Business Model Design</li>
                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={3} xl={3} xxl={3} >
                  <div                   
                      data-sal="fade"
                        data-sal-delay="200"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                <ul className="services-list delay-5"
      
                >
                      <li className="small-header">Design</li>
                      <li>Creative Direction</li>
                      <li>UX/UI Design</li>
                      <li>Prototyping</li>
                      <li>Graphic Design</li>
                      <li>Content Design</li>
                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={3} xl={3} xxl={3} >
                <div                   
                      data-sal="fade"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                <ul className="services-list delay-5">
                      <li className="small-header">Technology</li>
                      <li>Front-end Development</li>
                      <li>Ecommerce</li>
                      <li>Content management systems</li>

                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button delay-1 mt5 sm-mt1"><AniLink
                          to="/contact"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">Contact us</span></AniLink></div>
                  </Col>
            </Row>
      </Container>
     <Container fluid className="section-3">
          <Row justify="start" className="delay-1 pb4 sm-mt3" style={{
            position: 'relative'
          }}>  
          <Col sm={12} lg={12} xl={12} className="delay-1 pb2">
            <span className="small-header delay-1">Some of our recent work</span>
          </Col>
 
          <Col sm={12} lg={6} xl={6}  className="delay-1 pb4 sm-pb0"

              >


              <div                 data-sal-duration="300"
                data-sal="fade"
                data-sal-delay="800"
                data-sal-easing="ease-in">
                       
                        <AniLink
                              to="/masterme"
                                exit={{ length: 0.5 }}
                                entry={{ delay: 0.5 }}
                              >
                      <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"     
                                    // data-sal-duration="500"
                                    //  data-sal="slide-up"
                                    //  data-sal-delay="400"
                                    //  data-sal-easing="ease-in">
                                      >
            
                        <BGIMG className="border-50"></BGIMG>
                
                        </div>
           
                   </AniLink>  
            
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header delay-1 text-indent"     
                          >Master Me</div>
                         <p className="small-header delay-1">
                             Branding and website for a coaching course for creative professionals.
                          </p>
                      </div>
                </div>
                </div>  

       
        </Col>
  
        <Col sm={12} lg={4} xl={4}  className="delay-1 pb4 sm-pb0"
        
        >
       

       <div                 
       
                data-sal-duration="300"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease-in">
     
              <AniLink
                  to="/gftm"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >

           
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
                       >
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header delay-1 text-indent" >Great Forest Trail Marathon</div>
                         <p className="small-header delay-1">
                        Running to save a wild place in Great Forest, Victoria. 
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
        </div>
 
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12} >
    <div className="primary-button delay-1 mt5 sm-mt1"><AniLink
              to="/work"
              exit={{ length: 0.5 }}
              entry={{ delay: 0.5 }}
            ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
      </Col>
   </Row>
        </Container>
    </Layout>
  )
}

export default IndexPage

