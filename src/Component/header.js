import {React} from "react";
import image from "../assets/gg.jpg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state.handleCart);
  const totalQtn = state.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);
  return (
    <div>
      <Navbar key="xxl" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={image} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button 
                  variant="outline-success">Search</Button>
              </Form>

              <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                <NavDropdown title="Danh mục" id="basic-nav-dropdown">
                  <Nav.Link>
                    <NavDropdown.Item as={Link} to="/" className="text-center">
                      Home
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item
                      as={Link}
                      to="/products"
                      className="text-center"
                    >
                      Product
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item
                      as={Link}
                      to="/about"
                      className="text-center"
                    >
                      About
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item
                      as={Link}
                      to="/contact"
                      className="text-center"
                    >
                      Contact
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-sign-in me-1"></i> Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-user-plus me-1"></i> Register
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-shopping-cart me-1"></i> Cart ({totalQtn})
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
