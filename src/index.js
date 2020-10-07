import React from 'react'
import ReactDOM from 'react-dom'
import Customers from './components/Customers'
import Surveys from './components/Surveys'
import './styles/App.css'
import Token from './components/Token'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'


const App = () => {

  return (
    <div>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
    <img
    alt=""
    src="data-analysis.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{' '}
  Saran Firman CRM
    </Navbar.Brand>
    <Nav className="mr-auto">
  <Nav.Link href="#customers">Asiakkaat</Nav.Link>
  <Nav.Link href="#surveys">Kyselyt</Nav.Link>
  <Nav.Link onClick={Token}>Token</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-light">Hae</Button>
</Form>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Kirjautunut: <a href="#login">Sara Gilbert</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>

    <Container>

      <div>
      <h2 id="customers">Aasiakkaat</h2>
      <Customers />
      <h2 id="surveys">Saran Firman Kyselyt</h2>
      <Surveys />
    </div>
    </Container>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)