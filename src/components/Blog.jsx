import { Container, Row, Col} from 'react-bootstrap'

const Dashboard = () => {


  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Dashboard here</h1>
          <p>User can only see this part after they log in!</p>
   
         
          
        </Col>
      </Row>
      
    </Container>
  )
}


export default Dashboard 