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
import BGIMG11 from "../components/backgroundimage11"
import BGIMG13 from "../components/backgroundimage13"
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
          }} className="section-2">
        <Row justify="start" style={{
            position: 'relative'
          }}>
          <Col xs={6} sm={6}  md={3} lg={3} xl={3}  className="pb4 delay-1"
             data-sal-duration="100"
             data-sal="fade"
             data-sal-delay="100"
             data-sal-easing="ease-in"
          >
              <AniLink
                to="/astrid"
                exit={{ length: 0 }}
                entry={{ delay: 0 }}
              >
              <div style={{borderRadius: '0px'}} className="work-page-image-wrapper">
                <div className="case-study-tag">Case Study</div>
                  <BGIMG10 className="border-50"></BGIMG10>
              </div>
            </AniLink>
            <div className="project-wrapper">
                  <div className="title-wrapper">
                      <div className="small-header black"     
                          >Astrid - Strategy, branding and website for a plant based medicines dispensary.
                      </div>
                  </div>
              </div>
         </Col>
          <Col  xs={6} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
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
              <div style={{borderRadius: '0px'}} className="work-page-image-wrapper">
              <div className="case-study-tag">Case Study</div>
                  <BGIMG className="border-50"></BGIMG>
              </div>
            </AniLink>  
            <div className="project-wrapper">
              <div className="title-wrapper">
                  <div className="small-header"     
                      >Master Me - Branding and website for a coaching and personal development course.
                    </div>
                </div>
            </div>
        </Col>
        <Col  xs={6} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >

           <div style={{borderRadius: '0px'}} className="work-page-image-wrapper"
                      
           >  
            <BGIMG13></BGIMG13>
            </div>
        
            <div className="project-wrapper">
                    <div className="title-wrapper">
                    <div className="small-header">Lululemon -
                  
                         Design of an education platform for Lululemon's community.
                   
                      </div>
                    </div>
              </div>
          </Col>
          <Col xs={6} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
           <div style={{}} className="work-page-image-wrapper"
                       
           >
            <BGIMG11></BGIMG11>
            </div>
         
            <div className="project-wrapper">
                    <div className="title-wrapper">
                    <div className="small-header">Noga - 
                      Website design and build.<br></br>A new yoga experience built on rave culture. 
              </div>
                    </div>
              </div>
          </Col>
          <Col sm={6} md={3} lg={3} xl={3}   className="delay-1 pb4">             
              <div style={{}}
                      className="work-page-image-wrapper"

              >
                <BGIMG7 ></BGIMG7>
              </div>
       
            <div className="project-wrapper">
              <div className="title-wrapper">
              <div className="small-header">Drive Change - Branding and website for a national campaign to change outdated laws.
                    </div>  
              </div>
          </div>
        </Col>  
        <Col xs={6} sm={6}  md={3} lg={3} xl={3}  className="pb4 delay-1"
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

           
           <div style={{}} className="work-page-image-wrapper"
                         
                       >    <div className="case-study-tag">Case Study</div>
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                          <div className="small-header" >Great Forest Trail Marathon - Branding for a trail running event that's saving a wild place. 
               
                      </div>
                      </div>
                </div>
          </Col>
        <Col xs={6} sm={6}  md={3} lg={3} xl={3}   className="delay-1 pb4"
         data-sal-duration="100"
         data-sal="fade"
         data-sal-delay="100"
         data-sal-easing="ease-in"
        >
           <div style={{}} className="work-page-image-wrapper"
                          
           >
            <BGIMG6></BGIMG6>
            </div>        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <div className="small-header" >Obie - Branding for a financial tool that simplifies your finances.
           
                    </div>
                      </div>
                </div>
       

      </Col>
   
          <Col  xs={6} sm={6}  md={3} lg={3} xl={3}  className="delay-1 pb4"
                data-sal-duration="100"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-in"
              >
              
      
              <div style={{}} className="work-page-image-wrapper"
                             data-sal-duration="100"
                             data-sal="fade"
                             data-sal-delay="100"
                             data-sal-easing="ease-in"
             >

                <BGIMG2 ></BGIMG2>
                </div>

                            
                <div className="project-wrapper">
                          <div className="title-wrapper">
                          <div className="small-header">Musk - 
                  
                             Branding for an artist residency and boutique hotel in Dayelsford, Victoria. 
                        </div>
                          </div>
                    </div>

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
      </Container>
  </Layout>
)

export default Work

