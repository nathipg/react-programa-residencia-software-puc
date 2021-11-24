import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            Alunos App
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar">
            <Nav>
              <Nav.Link as={Link} to="/alunos">Home</Nav.Link>
              <Nav.Link as={Link} to="/cadastro">Cadastro de Alunos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
