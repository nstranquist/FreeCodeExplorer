import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">FreeCodeExplorer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/categories">
            <Nav.Link>Categories</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/videos">
            <Nav.Link>Videos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contribute">
            <Nav.Link>Contribute</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/my/courses">
            <Nav.Link>Your Courses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/courses">
            <Nav.Link>All Courses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/my/notes">
            <Nav.Link>Notes</Nav.Link>
          </LinkContainer>
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