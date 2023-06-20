import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
   <div style={{position:'fixed',zIndex:'999',width:'100%',top:'0',left:'0'}}>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">ShopCard</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
   </div>
  )
  ;
}

export default Header;
