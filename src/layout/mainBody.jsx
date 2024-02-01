import { Row, Col, Container, TabContainer } from "react-bootstrap";
import Header from "./header";
import SideBar from "./sideBar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainBody() {
  const [navBarHeading, setNavBarHeading] = useState("Welcome");
  const handleShowHeading = (contentValue) => {
    setNavBarHeading(contentValue);
    if (contentValue === "Dashboard") {
      setNavBarHeading("DASHBOARD");
    } else if (contentValue === "About") {
      setNavBarHeading("ABOUT");
    } else if (contentValue === "Calculator") {
      setNavBarHeading("CALCULATOR");
    } else if (contentValue === "Form-1") {
      setNavBarHeading("FORM");
    }else if (contentValue === "Table") {
      setNavBarHeading("TABLE");
    }
  };

  return (
    <div className="d-flex flex-column overflow-hidden">
      <TabContainer>
        <Row className="mx-2 row">
          <Col
            xs={0}
            lg={2}
            className="p-0 d-none d-md-none d-lg-flex h-100 flex-column "
          >
            <SideBar handleShowHeading={handleShowHeading} />
          </Col>
          <Col xs={12} lg={10} className="p-0 d-flex flex-column vh-100">
            <Row>
              <div>
                <Header
                  navBarHeading={navBarHeading}
                  handleShowHeading={handleShowHeading}
                />
              </div>
            </Row>
            <Row className="container-fluid mt-3 overflow-auto flex-fill">
              <div className="d-flex flex-column ">
                <Outlet />
              </div>
            </Row>

            <div className="vw-75"></div>
          </Col>
        </Row>
      </TabContainer>
      <Footer />
    </div>
  );
}
