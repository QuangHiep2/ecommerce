import {React} from "react";
import image from "../assets/gg.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";

function Header({data, setData}) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);
  const totalQtn = state.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div>
      <Navbar key="xxl" bg="light" expand="md" className="mb-3" fixed="top">
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
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Search data={data} setData={setData}/>

              <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
              <NavDropdown title="Danh mục" id="basic-nav-dropdown" className="btn">
                    <NavDropdown.Item as={Link} to="/" className="text-center">
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/products"
                      className="text-center"
                    >
                      Product
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/about"
                      className="text-center"
                    >
                      About
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/contact"
                      className="text-center"
                    >
                      Contact
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="btn btn-outline-secondary ms-2"
                >
                  <i className="fa fa-sign-in me-1"></i> Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="btn btn-outline-secondary ms-2"
                >
                  <i className="fa fa-shopping-cart me-1"></i> Cart ({totalQtn})
                </Nav.Link>
                
                <button className="btn btn-outline-secondary ms-2 fa fa-sign-out" onClick={handleLogout}>LogOut</button>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
