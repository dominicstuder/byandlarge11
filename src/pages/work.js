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
import GFTMHERO from "../components/gftmhero-img"
import { setConfiguration } from 'react-grid-system'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
import Footer from "../components/footer"

setConfiguration({ gutterWidth:'20', });

const Work = () => (
  
   
    <Container fluid style={{
            position: 'relative', marginTop: '10em',
          }} className="section-2">
        <Row justify="start" style={{
            position: 'relative'
          }}>
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb4 delay-1"
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
                        1
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
          <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
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
                        2
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Master Me (Case Study &#x2192;)
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website 
                    </div>
                  </Col>
                </Row>  
        </Col>
        <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
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
                        3
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
          <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
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
                        4
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Noga
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website
                    </div>
                  </Col>
                </Row>  
          </Col>
          <Col sm={6} md={3} lg={3} xl={3}   className="delay-1 pb4">             
              <div style={{}}
                      className="work-page-image-wrapper"

              >
                <BGIMG7 ></BGIMG7>
              </div>
       
              <Row justify="start" className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        5
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Drive Change
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Website 
                    </div>
                  </Col>
                </Row>  
        </Col>  
        <Col xs={12} sm={6}  md={3} lg={3} xl={3}  className="pb4 delay-1"
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
                        6
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
            {/* <div className="project-wrapper">

                          <div className="small-header" ><span  style={{textTransform:"uppercase"}}>Great Forest Trail Marathon</span> - Branding for a trail running event that's saving a wild place. 
               
                      </div>
           
                </div> */}
          </Col>
        <Col xs={12} sm={6}  md={3} lg={3} xl={3}   className="delay-1 pb4"
         data-sal-duration="100"
         data-sal="fade"
         data-sal-delay="100"
         data-sal-easing="ease-in"
        >
           <div style={{}} className="work-page-image-wrapper"
                          
           >
            <BGIMG6></BGIMG6>
            </div>        
            <Row justify="start"className="pt1" >
                  <Col md={2}>
                    <div className="small-header">
                        7
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="small-header">
                   Obie
                    </div>
                  </Col>
                  <Col md={10}  offset={{ md: 2 }}>
                    <div className="small-header">
                        Brand identity 
                    </div>
                  </Col>
                </Row>  
       

      </Col>
   
          <Col  xs={12} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
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
                        8
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

