// I will put the carousel here, surrounded by some layout bootstrap component

import { Container, Row, Col} from 'react-bootstrap'



// what is the STATE in a react component?
// a state is an object that can be defined in react Class components
// a state is a place for remembering things over time
// this object is available JUST in this component, encapsulated in the component
// even more, it is READ-ONLY

const Home = () => {
  // the state object must be created between the opening of the class
  // and the render() method
  // every time you refresh the page, the state resets

  // state = {
  //   selectedPasta: null,
  //   // selectedPasta is null initially, but eventually when I click on a slide
  //   // its value will become the pasta object I clicked on
  //   // because it will REMEMBER the last pasta I clicked on
  // }

 

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Welcome to example site</h1>
          <p>This is just an example website!</p>
          <p>Please log in before you can access your Dashboard!</p>
          {/* here let's put the carousel */}
          
        </Col>
      </Row>
      
    </Container>
  )
}


export default Home
