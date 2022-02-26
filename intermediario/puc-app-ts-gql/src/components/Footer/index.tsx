import { Navbar, NavbarBrand } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Navbar bg="light" expand="lg">
        <NavbarBrand>React Course - Typescript PUC</NavbarBrand>
      </Navbar>
    </footer>
  );
};
