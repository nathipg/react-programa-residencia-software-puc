import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link as={Link} to="/">
          Alunos App
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/alunos">
            Gerenciar alunos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
