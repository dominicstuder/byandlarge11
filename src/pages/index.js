import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
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
      {/* <Row justify="start" style={{
                
                }} className="video-section">
                  <Col md={12} lg={12} xl={6} xxl={6}  style={{
                    position: 'relative',
              
                  }}>
                  <div className="video-wrapper delay-2" style={{borderRadius: '5px'}}>
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
                </Row>     */}
      <Row justify="start" style={{
         
        }} className="home-page-intro mt5 sm-mt2">
          {/* <Col sm={12} lg={3} xl={3} xxl={3} className="small-header delay-1">About us</Col> */}
           <Col sm={12} md={10} lg={6} xl={6} xxl={6} style={{
              position: 'relative',
      
            }}>
              <h1 
            className="body very-large delay-1">
             A multidisciplinary design and digital studio, By and Large.
            </h1>
              </Col>
          </Row>
      
          </Container>
          
     <Container fluid className="section-3 home">
          <Row justify="start" className="pb4 sm-mt3" style={{
            position: 'relative'
          }}>  
          <Col sm={12} lg={12} xl={12} className="pb2 sm-pb1">
            <span className="small-header delay-1">Recent work</span>
          </Col>
 
          <Col xs={12} sm={4} md={4} lg={4} xl={4}  className="delay-1 pb4 sm-pb0  delay-1"

              >


              <div                 
              data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
                       
                        <AniLink
                              to="/masterme"
                                exit={{ length: 0 }}
                                entry={{ delay: 0 }}
                              >
                      <div style={{borderRadius: '5px'}} className="work-page-image-wrapper"     
                                    // data-sal-duration="500"
                                    //  data-sal="slide-up"
                                    //  data-sal-delay="400"
                                    //  data-sal-easing="ease-in">
                                      >
                         <div className="case-study-tag">Case Study</div>
                        <BGIMG className="border-50"></BGIMG>
                
                        </div>
           
                   </AniLink>  
            
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header"     
                          >Master Me - Branding and website for a coaching and personal development course that helps creative professionals to find their true selves.
                              </div>    
                    </div>
                </div>
                </div>  

       
        </Col>
  
        <Col xs={12} sm={4} md={4} lg={4} xl={4}  className="delay-1 pb1 sm-pb0"
               data-sal-duration="100"
               data-sal="fade"
               data-sal-delay="100"
               data-sal-easing="ease-in"
        >

                     <TransitionLink to="/greatforesttrailmarathon">
           <div style={{borderRadius: '5px'}} className="work-page-image-wrapper">
             <div className="case-study-tag">Case Study</div>
            <GFTMHERO className="border-50"></GFTMHERO>
            </div>
            </TransitionLink>
                <div className="project-wrapper">
                    <div className="title-wrapper" >
                        <div className="small-header" >Great Forest Trail Marathon - Branding for a trail running event that's saving a wild place. 
                        </div>
                    </div>
                </div>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4} className="delay-1 pb1 sm-pb0">
            <div                 
       
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
     
     <TransitionLink to="/astrid">

           
           <div style={{borderRadius: '5px'}} className="work-page-image-wrapper"
                       >
                                     <div className="case-study-tag">Case Study</div>
            <BGIMG10 className="border-50"></BGIMG10>
 
            </div>
           
            </TransitionLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header" >Astrid - Strategy, branding and website for a plant based medicines dispensary.
                         </div>
                      </div>
                </div>
        </div>
        </Col>
<Col md={12} lg={12} xl={12} xxl={12} className="pb4">
                <div class="primary-button">
                <TransitionLink to="/work">
                    View all Work
                </TransitionLink >
                </div>
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
