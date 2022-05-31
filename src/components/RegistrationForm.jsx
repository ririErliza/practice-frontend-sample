// I will create here my custom form
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

// http://localhost:3002/authors/register
// POST



const RegistrationForm = () => {


  const [Registration, setRegistration] = useState({
    name: '',
    surname: '',
    email: '',
    dateOfBirth: '',
    password: '',
    
  })


  // the async/await method
  const submitRegistration = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'http://localhost:3002/authors/register',
        {
          method: 'POST',
          body: JSON.stringify(Registration),
          headers: {
            'Content-Type': 'application/json',
            // this is specifying to the endpoint that we're sending
            // an object, even if the body is a string
            // if the endpoint is protected, here you'd also insert
            // your Bearer token
          },
        }
      )
      if (response.ok) {
        // good job!
        alert('Registration saved!')

        setRegistration({
          name: '',
          surname: '',
          email: '',
          dateOfBirth: '',
          password: '',
        })
      } else {
        // aww snap!
        alert('error!')
        // I'll not reset the form in this case
      }
    } catch (error) {
      console.log(error)
      // this is conceptually equivalent to the last .catch() block
    }
  }

  return (
    <>
      <h3 className='mt-5 mb-5'>Registration FORM</h3>
      <Form onSubmit={submitRegistration}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here"
            value={Registration.name}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
            
              setRegistration({
                ...Registration,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Registration state property
                name: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your surname</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here"
            value={Registration.surname}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
            
              setRegistration({
                ...Registration,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Registration state property
                surname: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="type here"
            value={Registration.email}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
            
              setRegistration({
                ...Registration,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Registration state property
                email: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your date of birth</Form.Label>
          <Form.Control
            type="date"
            required
            placeholder="type here"
            value={Registration.dateOfBirth}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
            
              setRegistration({
                ...Registration,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Registration state property
                dateOfBirth: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Create your password</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here"
            value={Registration.password}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
            
              setRegistration({
                ...Registration,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Registration state property
                password: e.target.value,
              })
            }}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default RegistrationForm
