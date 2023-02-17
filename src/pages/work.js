import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-grid-system'
import BGIMG from "../components/backgroundimage1"
import BGIMG6 from "../components/backgroundimage6"
import BGIMG7 from "../components/backgroundimage7"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG10 from "../components/backgroundimage10"
import BGIMG11 from "../components/backgroundimage11"
import BGIMG13 from "../components/backgroundimage13"
import BGIMG14 from "../components/backgroundimage14"
import BGIMG15 from "../components/backgroundimage15"
import BGIMG17 from "../components/backgroundimage17"
import Astridfeature from "../components/backgroundimage16"
import BGIMG18 from "../components/backgroundimage18"
import BGIMG19 from "../components/backgroundimage19"
import BGIMG20 from "../components/backgroundimage20"
import BGIMG21 from "../components/backgroundimage21"
import BGIMG22 from "../components/backgroundimage22"
import BGIMG23 from "../components/backgroundimage23"
import GFTMHERO from "../components/gftmhero-img"
import GFTMHERO2 from "../components/gftmhero-img2"
import { setConfiguration } from 'react-grid-system'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
import Footer from "../components/footer"
// import Raefeature from "../assets/byandlarge-rae-feature.mp4"


setConfiguration({ gutterWidth:'20', });

const Work = () => (
  
   
    <Container fluid style={{
            position: 'relative', marginTop: '10em',
          }} className="section-2">
        <Row justify="start" style={{
            position: 'relative'
          }}>
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <div style={{}} className="work-page-image-wrapper">
                  {/* <video autoPlay loop muted className="background-video">
                            <source src={Raefeature} type='video/mp4' />
                         
                    </video> */}
                     <BGIMG18></BGIMG18>
              </div>
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        1
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Rae
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
         </Col>
         <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <div style={{}} className="work-page-image-wrapper">
                  {/* <video autoPlay loop muted className="background-video">
                            <source src={Raefeature} type='video/mp4' />
                         
                    </video> */}
                     <BGIMG19></BGIMG19>
              </div>
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        2
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Rae
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand collateral 
                    </div>
                  </Col>
                </Row>  
         </Col>
         <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <AniLink
                to="/astrid"
                exit={{
                  length: 0
                }}
                entry={{
                  delay: 0
                }}
              >
              <div style={{}} className="work-page-image-wrapper">
                
                  <BGIMG10 className="border-50"></BGIMG10>
              </div>
            </AniLink>
            <Row justify="start" className="pt1" >
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
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
             
         </Col>
         <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <AniLink
                to="/astrid"
                exit={{
                  length: 0
                }}
                entry={{
                  delay: 0
                }}
              >
              <div style={{}} className="work-page-image-wrapper">
                   

                  <Astridfeature className="border-50"></Astridfeature>
              </div>
            </AniLink>
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        4
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Astrid (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development
                    </div>
                  </Col>
                </Row>  
             
         </Col>
         <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <AniLink
                to="/astrid"
                exit={{
                  length: 0
                }}
                entry={{
                  delay: 0
                }}
              >
              <div style={{}} className="work-page-image-wrapper">
                   

                  <BGIMG20 className="border-50"></BGIMG20>
              </div>
            </AniLink>
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        5
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Astrid (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Collateral 
                    </div>
                  </Col>
                </Row>  
             
         </Col>
          <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
            <AniLink
                to="/masterme"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
              >
              <div style={{}} className="work-page-image-wrapper">
            
                  <BGIMG className="border-50"></BGIMG>
              </div>
            </AniLink>  
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        6
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Master Me (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development
                    </div>
                  </Col>
                </Row>  
        </Col>
        <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
            <AniLink
                to="/masterme"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
              >
              <div style={{}} className="work-page-image-wrapper">
            
                  <BGIMG17 className="border-50"></BGIMG17>
              </div>
            </AniLink>  
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        7
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Master Me (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
        </Col>
        <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
            <AniLink
                to="/masterme"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
              >
              <div style={{}} className="work-page-image-wrapper">
            
                  <BGIMG23 className="border-50"></BGIMG23>
              </div>
            </AniLink>  
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        8
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Master Me (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Content creation 
                    </div>
                  </Col>
                </Row>  
        </Col>
        <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >

           <div style={{}} className="work-page-image-wrapper"
                      
           >  
            <BGIMG13></BGIMG13>
            </div>
        
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        9
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Lululemon
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Creative Direction 
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >

           <div style={{}} className="work-page-image-wrapper"
                      
           >  
            <BGIMG14></BGIMG14>
            </div>
        
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        10
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Lululemon
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development 
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
           <div style={{}} className="work-page-image-wrapper"
                       
           >
            <BGIMG11></BGIMG11>
            </div>
         
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        11
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Noga
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
           <div style={{}} className="work-page-image-wrapper"
                       
           >
            <BGIMG21></BGIMG21>
            </div>
         
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        12
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Noga
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                    Collateral
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
           <div style={{}} className="work-page-image-wrapper"
                       
           >
            <BGIMG22></BGIMG22>
            </div>
         
            <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        13
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Noga
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Collateral
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col sm={6} md={3} lg={3} xl={3}   className="delay-1 pb2">             
              <div style={{}}
                      className="work-page-image-wrapper"

              >
                <BGIMG7 ></BGIMG7>
              </div>
       
              <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        14
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Drive Change
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development
                    </div>
                  </Col>
                </Row>  
        </Col>  
        <Col sm={6} md={3} lg={3} xl={3}   className="delay-1 pb2">             
              <div style={{}}
                      className="work-page-image-wrapper"

              >
                <BGIMG15 ></BGIMG15>
              </div>
       
              <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        15
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Drive Change
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website design & development
                    </div>
                  </Col>
                </Row>  
        </Col>  
        <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
          data-sal-duration="100"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-in"
        >

              <AniLink
                  to="/greatforesttrailmarathon"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
                  >

           
           <div style={{}}className="work-page-image-wrapper" > 
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
            <div className="pt1">
                <Row justify="start" >
                  <Col md={2}>
                    <div className="small-header">
                        16
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Great Forest Trail Marathon <br/>(Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
              </div>      
          </Col> 
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb2 delay-1"
          data-sal-duration="100"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-in"
        >

              <AniLink
                  to="/greatforesttrailmarathon"
                  exit={{ length: 0 }}
                  entry={{ delay: 0 }}
                  >

           
           <div style={{}}className="work-page-image-wrapper" > 
            <GFTMHERO2 className="border-50"></GFTMHERO2>
 
            </div>
           
            </AniLink>
            <div className="pt1">
                <Row justify="start" >
                  <Col md={2}>
                    <div className="small-header">
                        17
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Great Forest Trail Marathon <br/>(Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand collateral 
                    </div>
                  </Col>
                </Row>  
              </div>      
          </Col>   
          <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb2"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
              
      
              <div style={{}}className="work-page-image-wrapper"
                             data-sal-duration="100"
                             data-sal="fade"
                             data-sal-delay="100"
                             data-sal-easing="ease-in"
             >

                <BGIMG2 ></BGIMG2>
                </div>

                            
                <Row justify="start"className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        18
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Musk 
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
       

          </Col>
          {/* <Col sm={6}  md={3} lg={3} xl={3}   className="delay-1"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >

         
           <div style={{}} className="work-page-image-wrapper"

           >

            <BGIMG4></BGIMG4>
            </div>
    
            <div className="project-wrapper">
                    <div className="title-wrapper">
                    <div className="small-header">RDP - 
                     
                      Branding for a design and construction agency in Melbourne.
                    </div>
                    </div>
              </div>
          </Col> */}
        </Row>
        <Footer/>
      </Container>

)

export default Work

