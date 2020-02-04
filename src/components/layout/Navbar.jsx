import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">FreeCodeExplorer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#your-courses">Your Courses</Nav.Link>
          <Nav.Link href="#all-courses">All Courses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// search bar (optional):
/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
  </Form> */

// dropdown code:
/* <NavDropdown title="More" id="collasible-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown> */