import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import clip from '../assets/newfeature.mp4'; 
import test from '../assets/comp1_2.mp4'; 
import { setConfiguration } from 'react-grid-system';
import BGIMG from "../components/backgroundimage1"
import GFTMHERO from "../components/gftmhero-img"
import BGIMG10 from "../components/backgroundimage10"
setConfiguration({ gutterWidth:'20'});


const IndexPage = () => {
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Home" />

      <Container fluid className="video-container pt5 sm-pt5">
      <Row justify="start" style={{
                
                }} className="video-section">
                  <Col md={12} lg={12} xl={12} xxl={12}  style={{
                    position: 'relative',
              
                  }}>
                  <div className="video-wrapper delay-2" style={{
                        }}>
                           <AniLink
                    to="/work"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >     
                    <video autoPlay loop muted className="background-video">
                            <source src={test} type='video/mp4'/>
                    </video>
                    </AniLink>
                  </div>
      
                 </Col>
                </Row>    
      <Row justify="start" style={{
         
        }} className="home-page-intro mt5 sm-mt2">
          {/* <Col sm={12} lg={3} xl={3} xxl={3} className="small-header delay-1">About us</Col> */}
           <Col sm={12} md={10} lg={10} xl={10} xxl={10} style={{
              position: 'relative',
      
            }}
            // data-sal="fade"
            // data-sal-delay="100"
            // data-sal-easing="ease"
            // data-sal-duration="500"
            > <h1 
            className="body very-large delay-1">
             A multidisciplinary design and digital studio, By and Large. 
              {/* By and Large is an independent, multidisciplinary design and digital studio. We create impact through creative and considered strategy, design, content creation and use of technology. */}
            </h1>
            {/* <p class="body delay-1">Read more</p> */}
            {/* <h1 
            className="body medium delay-1">
              Currently based in Newcastle, we work with clients around Australia and beyond.
            </h1> */}
              </Col>
          </Row>
      
          </Container>
          
     <Container fluid className="section-3">
          <Row justify="start" className="delay-1 pb4 sm-mt3" style={{
            position: 'relative'
          }}>  
          <Col sm={12} lg={12} xl={12} className="delay-1 pb2 sm-pb1">
            <span className="small-header delay-1">Recent work</span>
          </Col>
 
          <Col sm={12} lg={6} xl={4}  className="delay-1 pb4 sm-pb0"

              >


              <div                 data-sal-duration="300"
                data-sal="fade"
                data-sal-delay="800"
                data-sal-easing="ease-in">
                       
                        <AniLink
                              to="/masterme"
                                exit={{ length: 0 }}
                                entry={{ delay: 0 }}
                              >
                      <div style={{}} className="work-page-image-wrapper delay-1"     
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
                      <div className="small-header delay-1"     
                          >Master Me</div>
                         <p className="body delay-1">
                              Branding and website for a coaching course for creative professionals.
                          </p>
                      </div>
                </div>
                </div>  

       
        </Col>
  
        <Col sm={12} md={12} lg={6} xl={4}  offset={{sm: 0, md: 0, lg:0}} className="delay-1 pb1 sm-pb0">
       

       <div                 
       
                data-sal-duration="300"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease-in">
     
              <AniLink
                  to="/greatforesttrailmarathon"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
                  >

           
           <div style={{}} className="work-page-image-wrapper delay-1"
                       >
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header delay-1" >Great Forest Trail Marathon</div>
                         <p className="body delay-1">
                         Branding for a trail running event that's saving a wild place. 
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
        </div>
 
          </Col>
          <Col sm={12} md={12} lg={6} xl={4}  offset={{sm: 0, md: 0, lg:0}} className="delay-1 pb1 sm-pb0">
       

       <div                 
       
                data-sal-duration="300"
                data-sal="fade"
                data-sal-delay="500"
                data-sal-easing="ease-in">
     
              <AniLink
                  to="/astrid"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
                  >

           
           <div style={{}} className="work-page-image-wrapper delay-1"
                       >
            <BGIMG10 className="border-50"></BGIMG10>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header delay-1" >Astrid</div>
                         <p className="body delay-1">
                         Strategy, branding and website for a plant based medicines dispensary.
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
        </div>
 
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12} className="pb4">
                <p class="body"><AniLink
              to="/work"
              exit={{ length: 0.2 }}
              entry={{ delay: 0.2 }}
            >View all our work</AniLink></p>
              </Col> 

          {/* <Col md={12} lg={12} xl={12} xxl={12} >
    <div className="primary-button delay-1 mt2 sm-mt1"><AniLink
              to="/work"
              exit={{ length: 0.5 }}
              entry={{ delay: 0.5 }}
            ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
      </Col> */}
   </Row>
        </Container>
    </Layout>
  )
}

export default IndexPage
