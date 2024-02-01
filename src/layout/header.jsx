
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../CSS/header.css'
import SideBar from "./sideBar";


export default function Header({navBarHeading ,  handleShowHeading}) {
  return (
    <div  className="d-flex">
      <Navbar expand="lg" className="bg-body-tertiary header-main-body flex-grow-1">
        <Container fluid>
          <Navbar.Brand href="#" className="header-text">{navBarHeading}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
            </Nav>
            <Form className="  w-100">
           
             <div className="d-flex d-md-flex d-lg-none">
             <SideBar 
              
              handleShowHeading={handleShowHeading}
             /> 
             </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
