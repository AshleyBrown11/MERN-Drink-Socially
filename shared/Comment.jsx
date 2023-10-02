import React from "react";
import "./comment.css";

import { Container, Row, Col } from "reactstrap";

const Comment = ({ title }) => {
  return (
    <section className="comment">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comment;
