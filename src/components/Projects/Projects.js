import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import medhub from "../../Assets/Projects/medHub.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TalentScreen"
              description="TalentScreen is a comprehensive website that helps recruiters in achieving staffing objectives and evaluating job candidates.  Contains distinctive modules like Profile, Subjects, Quiz, and Video Tests. Diverse users can access this application. Candidates can take tests and check their knowledge. Recruiters can find profiles for open work positions.

              "
              link="https://talentscreen.io/#/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="Avatar"
              description="Avatar is a vendor management software using this application clients can manage their vendors, services, purchase orders, invoices, and billing.I have Developed with Java, MySQL, and jQuery. This Application is Customer relationship management system for whitebox learning."
              link=""
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link="https://pratap-kumar-sahoo.blogspot.com/"
            
              site="Visit my blogs"
           
              
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
