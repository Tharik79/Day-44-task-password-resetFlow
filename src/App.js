//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Nav } from 'react-bootstrap';
//import { Button, Form } from 'bootstrap';

function App() {
  return (
    <div className="App">
     
     <Login/>
    </div>
  );
}

export default App;


function Login(){


  return(

    <div className='container'>

      <Card bg='light' style={{ width: '500px', padding:'20px' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
             We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Text id="passwordHelpBlock">
            <Nav
              activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                forget password ?
                  <Nav.Item>
                    <Nav.Link href="/home">reset here</Nav.Link>
                  </Nav.Item>
            </Nav>
              
               {/* Forget password ? <Link to="/signup" onClick={() => history.push('/signup')}>Sign Up</Link> */}
          </Form.Text>
        </Form.Group>  

  
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      </Card>

         

    </div>

  );
};
