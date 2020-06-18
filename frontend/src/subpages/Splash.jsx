import React from 'react'
import Header from '../components/Header'
import Text from '../components/Text'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Splash = () =>{
    return(
      <div>
        <Container>
          <Row>
            <Col>
              <Header big>
                EGaDS 
              </Header>
              <Header>
                Electronic Game Developers Society
                Come make games with us!
              </Header>
            </Col>
          </Row>
        </Container>
      </div>
      );
}

export default Splash