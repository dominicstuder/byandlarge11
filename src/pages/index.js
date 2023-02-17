import React, {} from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo";
import { Container, Row, Col } from 'react-grid-system'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system'
import Bgimg from "../components/backgroundimage1"
import Gftmhero from "../components/gftmhero-img"
import Bgimg10 from "../components/backgroundimage10"
import Footer from "../components/footer"


setConfiguration({ gutterWidth:'20'});


const IndexPage = ({ data, path }) => {
    return (
      <>
      <Container fluid className="video-container pt5 sm-pt5">
      <Row justify="start" style={{
         
        }} className="home-page-intro mt5 sm-mt2">
          {/* <Col sm={12} lg={3} xl={3} xxl={3} className="small-header delay-1">About us</Col> */}
           <Col sm={12} md={12} xxl={6} style={{
              position: 'relative',
      
            }}>
              <h1 
            className="header-2 delay-1">
             A multidisciplinary design and digital studio, By and Large.
            </h1>
              </Col>
          </Row>
            {/* <Test></Test> */}
          </Container>
          
     <Container fluid className="section-3 home">
          <Row justify="start" className="pb4 sm-mt3" style={{
            position: 'relative'
          }}>  
          <Col sm={12} lg={12} xl={12} className="pb1 sm-pb1">
            <span className="small-header delay-1">Case Studies</span>
          </Col>
 
          <Col xs={12} sm={4} md={4} lg={4} xl={4}  className="delay-1 pb2"
              data-sal-duration="100"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease-in"
              >
                        <AniLink
                              to="/masterme"
                              exit={{
                                length: 0.2
                              }}
                              entry={{
                                delay: 0.2
                              }}
                              >
                      <div style={{}} className="work-page-image-wrapper"     
                                    // data-sal-duration="500"
                                    //  data-sal="slide-up"
                                    //  data-sal-delay="400"
                                    //  data-sal-easing="ease-in">
                                      >
                   
                        <Bgimg className="border-50"></Bgimg>
                
                        </div>
           
                   </AniLink>  
            
                   <Row justify="start"className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        1
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                    Master Me (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                    Branding and website for a coaching and personal development course that helps creative professionals to find their true selves.
                    </div>
                  </Col>
                </Row>  
        </Col>
  
        <Col xs={12} sm={4} md={4} lg={4} xl={4}  className="delay-1 pb2 "
               data-sal-duration="100"
               data-sal="fade"
               data-sal-delay="100"
               data-sal-easing="ease-in"
        >

                     <AniLink to="/greatforesttrailmarathon"
                      exit={{
                        length: .2
                      }}
                      entry={{
                        delay: .2
                      }}
                     
                     >
           <div style={{}} className="work-page-image-wrapper">
         
            <Gftmhero className="border-50"></Gftmhero>
            </div>
            </AniLink>
            <Row justify="start"className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        2
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                    Great Forest Trail Marathon (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                    Branding for a trail running event that's saving a wild place.
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4} className="delay-1 pb2">
            <div                 
       
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in">
     
     <AniLink to="/astrid"
      exit={{
        length: .2
      }}
      entry={{
        delay: .2
      }}
     >

           
           <div style={{}} className="work-page-image-wrapper"
                       >
                                    
            <Bgimg10 className="border-50"></Bgimg10>
 
            </div>
           
            </AniLink>
                        
            <Row justify="start"className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        3
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Astrid (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                    Strategy, branding and website for a plant based medicines dispensary.
                    </div>
                  </Col>
                </Row>  
        </div>
        </Col>
<Col md={12} lg={12} xl={12} xxl={12} className="pb4">
                <div class="primary-button delay-1"
                
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
                >
                 <AniLink to="/work"
                 exit={{
                  length: 0.5
                }}
                entry={{
                  delay: 0.5
                }}
                >
                    View all Work
                </AniLink >
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
        <Footer /> 
        </>
  )
}

IndexPage.Layout = Layout

export default IndexPage
