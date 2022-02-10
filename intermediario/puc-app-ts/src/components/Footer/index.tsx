import { Navbar, NavbarBrand } from 'react-bootstrap'
import { Container } from '../../containers'

export const Footer = () =>  {
  return (
    <footer className="fixed-bottom">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand>React Course - Typescript PUC</NavbarBrand>
        </Container>
      </Navbar>
    </footer>
  )
}