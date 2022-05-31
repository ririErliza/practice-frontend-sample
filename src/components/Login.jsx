import {Form, Button} from 'react-bootstrap'
import { useLocation, useNavigate} from 'react-router-dom'

const Login = () =>{
    const location = useLocation()
    console.log('LOCATION', location)
    const navigate = useNavigate()

    // const [login, setlogin] = useState({
    //     email: "",
    //     password: "",
    //   });

    const loginMessage = (e) =>{
        e.preventDefault()
        alert("submit button clicked")
    }

    // const usualLogin = async () => {
    //     try {
    //       let response = await fetch(`http://localhost:3002/authors/login`, {
    //         method: "POST",
    //         body: JSON.stringify(login),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       })
    //       if (response.ok) {
            
    //         console.log('response is', response) 
          
    //       } else {
          
       
        
    //       }
    //     } catch (error) {
    //       console.log(error)
     
        
    //     }
    //   }


return(
    <>
    <Form>
  
    <a href="http://localhost:3002/authors/googleLogin"> <Button variant="danger" size="lg">
        Login with Google
    </Button>
    </a>
</Form>

<p className='mt-3'> OR</p>

<Form onSubmit={loginMessage}>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   
    <Button variant="primary" type="submit">
        Login
    </Button>

</Form>

<p className='mt-3 font-italic'>don't have account yet?</p>
    <Button variant="primary" onClick={() => navigate('/registration')}>
        Register
    </Button>
    </>
)
}

export default Login