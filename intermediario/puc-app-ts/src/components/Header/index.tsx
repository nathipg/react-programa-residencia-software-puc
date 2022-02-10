import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from '../../containers'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">Alunos App</Nav.Link>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/alunos">Gerenciar alunos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}