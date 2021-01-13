import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Pratap-Resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Developer"
              
              content={[
                "I am working with Innovapath It Solution as a Software Developer.",
                " I have worked both Frontend and Backend, for Backend i have used Java and SpringBoot and Frontend used reactJS.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Tech Blogger"
              content={[
                "I love to write tech blogs.",
              ]}
            />
            <Resumecontent
              title="Software Instructor"
              content={[
                " Working as a Software instructor with Whitebox learnings.",
                
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B-Tech [Computer Science], 2018 "
              date="Bhadrak institute Of Engineering and Technolgy, Odisha "
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="12TH BOARD, 2014"
              date="Royal college of science and technology, Odisha"
              content={["Precentage: 70%"]}
            />
            <Resumecontent
              title="10TH BOARD, 2012"
              date="Bhadrak High School, Odisha"
              content={["Precentage: 66%"]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
               
                "Oracle Certified Java Programmer",
                "Ehtical Hacker",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
