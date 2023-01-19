import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-grid-system'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container fluid style={{
            position: 'relative', marginTop: '10em',
          }} className="section-2">
        <Row justify="start" style={{
            position: 'relative'
          }}>
          <Col sm={12} lg={12} xl={12} className="pb4">
    <h1 className="header-1">404: Not Found</h1>
    <p class="body">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Col>
    </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
