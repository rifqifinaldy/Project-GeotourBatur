import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BackgroundLine from "../BackgroundLine/BackgroundLine";
import { dataFounder } from "./DataFounder";

const TeamFounder = () => {
  return (
    <Container fluid={true} className="team">
      <div className="team-founder">
        <div className="my-4 text-center">
          <div className="title">
            <h4>Team</h4>
            <h2>Founder</h2>
            <hr />
          </div>
        </div>
        <Row className="d-flex justify-content-center">
          <BackgroundLine />
          <BackgroundLine />
          {dataFounder.map((item, i) => {
            return (
              <Col
                key={i}
                className={
                  i % 2 === 0
                    ? "card-team p-1 shadow-sm mt-5"
                    : "card-team p-1 shadow-sm"
                }
              >
                <img src={item.img} alt={item.name} className="w-100" />
                <div className="text-center info">
                  <h5>{item.name}</h5>
                  <span>{item.title}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default TeamFounder;
