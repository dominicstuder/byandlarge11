import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-grid-system'
import Arrow from "../assets/arrow.svg"
import BGIMG from "../components/backgroundimage1"
import BGIMG6 from "../components/backgroundimage6"
import BGIMG7 from "../components/backgroundimage7"
// import BGIMG8 from "../components/backgroundimage8"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG4 from "../components/backgroundimage4"
import BGIMG10 from "../components/backgroundimage10"
import GFTMHERO from "../components/gftmhero-img"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system'
import { Parallax } from "react-scroll-parallax";

setConfiguration({ gutterWidth:'30', });

const Work = () => (
  <Layout>
    <Seo Title="Work" />
    <Container fluid style={{
            position: 'relative', marginTop: '10em',
          }} className="section-2 work">
        <Row justify="start" style={{
            position: 'relative'
          }}>
          <Col sm={12} lg={6} xl={6} className="pb1"
          >
        

              <AniLink
                to="/astrid"
                exit={{ length: 0.5 }}
                entry={{ delay: 0.5 }}
              >
                <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1">
                    <BGIMG10 className="border-50"></BGIMG10>
                </div>
              </AniLink>

            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header black delay-1"     
                          >Astrid</div>
                         <p className="body black delay-1">
                         Strategy, branding and website for a plant based medicines dispensary.
                          </p>
                      </div>
                </div>
                </Col>

  
 
          <Col sm={12} lg={6} xl={6}  className="delay-1 pb4"

              >

                       
                        <AniLink
                              to="/masterme"
                                exit={{ length: 0.5 }}
                                entry={{ delay: 0.5 }}
                              >
                      <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1"     

                        >
            
                        <BGIMG className="border-50"></BGIMG>
                
                        </div>
           
                   </AniLink>  
            
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header black delay-1"     
                          >Master Me</div>
                         <p className="body black delay-1">
                             Branding and website for a coaching course for creative professionals.
                          </p>
                      </div>
                </div>
        </Col>
  
        <Col sm={12} lg={5} xl={5}  className="delay-1 pb4">

              <AniLink
                  to="/greatforesttrailmarathon"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >

           
           <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1"
                           data-sal-duration="500"
                           data-sal="fade"
                           data-sal-delay="400"
                           data-sal-easing="ease-in"
                       >
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header delay-1" >Great Forest Trail Marathon</div>
                         <p className="body black delay-1">
                        Branding for a trail running event that's saving a wild place. 
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
          </Col>
        <Col sm={12} lg={5} xl={5}  className="delay-1 pb4">
             <AniLink
                  to="/obie"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >
           <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1"
                           data-sal-duration="500"
                           data-sal="fade"
                           data-sal-delay="400"
                           data-sal-easing="ease-in"
           >

            <BGIMG6 className="border-50"></BGIMG6>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="body black delay-1" >Obie</div>
                         <p className="body black delay-1">
                         Branding for a financial tool that simplifies your finances.
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
       

      </Col>
      <Col sm={12} lg={8} xl={8}   className="delay-1 pb4">
    
               
                    <AniLink
                              to="/drivechange"
                              exit={{ length: 0.5 }}
                              entry={{ delay: 0.5 }}
                            >
                      <div style={{borderRadius:'10px',}}
                               className="work-page-image-wrapper delay-1"

                      >
                        <BGIMG7 className="border-50"></BGIMG7>
                        {/* <div className="work-button"><AniLink
                                    cover  to="/drive-change" bg="#1E1E1E"
                                    direction="left"
                                    duration={1.5}
                                  ><span className="link-text">View case study</span></AniLink>
                              </div> */}
                      </div>
                    </AniLink>
                    <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header">Drive Change</div>  
                          <p className="body black delay-1">
                            Branding and website for a national campaign to change outdated laws.</p>
                          <Arrow className="arrow"></Arrow>
                      </div>
                  </div>

      </Col>  
      </Row>
      <Row justify="start">
          <Col sm={12} lg={4} xl={5}  className="delay-1 pb4"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease-in"
              >
                <AniLink
                        to="/musk"
                        exit={{ length: 0.5 }}
                        entry={{ delay: 0.5 }}
                      >
      
              <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1"
                             data-sal-duration="500"
                             data-sal="fade"
                             data-sal-delay="400"
                             data-sal-easing="ease-in"
             >

                <BGIMG2 className="border-50"></BGIMG2>
                </div>
                </AniLink>
                            
                <div className="project-wrapper">
                          <div className="title-wrapper">
                          <div className="small-header delay-1">Musk</div>
                            <p className="body black delay-1">
                             Branding for an artist residency and boutique hotel in Dayelsford, Victoria. 
                            </p>
                          </div>
                    </div>

          </Col>
          <Col sm={12} lg={5} xl={5}  className="delay-1"
                data-sal-duration="500"
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease-in"
              >

            <AniLink
                    to="/rdp"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
           <div style={{borderRadius:'10px',}} className="work-page-image-wrapper delay-1"
                        data-sal-duration="500"
                        data-sal="fade"
                        data-sal-delay="400"
                        data-sal-easing="ease-in"
           >

            <BGIMG4 className="border-50"></BGIMG4>
            </div>
            </AniLink>       
            <div className="project-wrapper">
                    <div className="title-wrapper">
                    <div className="small-header delay-1">RDP</div>
                        <p className="body black delay-1">
                      Branding for a design and construction agency in Melbourne.
                      </p>
                    </div>
              </div>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default Work

