import React from "react"
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'30'});


const Footer = () => {
    return (

<footer style={{
          paddingBottom: '.5em',
        }}
        className="delay-1"
        >
        <Container fluid >
           <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '5em',
          }}>
            <Col  xs={6} sm={6} md={6}><div style={{
            
          }}className="small-copy delay-1">

                <p>
               Opening hours<br></br>
               Mo–Fr: 9AM - 5PM
                </p>
                <p>
                NSW, Australia
                </p>
                </div>
            </Col>
             <Col  xs={6} sm={3} md={3}><div style={{
            
            }}className="small-copy delay-1">
                <a href="mailto:mail@byandlarge.studio">
                  <p>
                    Contact<br></br>
                  mail@byandlarge.studio
                  </p>
                  </a>
            
                  </div>
              </Col>
              <Col  xs={6} sm={3} md={3}><div style={{
            
          }}className="small-copy delay-1">

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/studiobyandlarge/">
            <p>
            Social<br></br>
              @studiobyandlarge 
              </p>
            </a>
          
                </div>
            </Col>
            
            
              </Row>
              <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '2em',
          }}>
              <Col  xs={12} sm={4}><div style={{
            
          }}className="small-copy delay-1">
            <p>
                    By and Large Studio is on the traditional country of the Awabakal and Worimi peoples. We recognize and respect their cultural heritage, beliefs and continuing relationship with the land.<br></br>
                    </p>
                </div>
            </Col>

             <Col  xs={12} sm={12} md={12}><div style={{
            
            }}className="small-copy delay-1 pt1">
                      <span className="copyright"> <p>&#169;2023 Studio By and Large</p></span>
                  </div>
              </Col>
            </Row>
        </Container>

        </footer>
          )
        }
        
        export default Footer
        