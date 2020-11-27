import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";

export function NoMatch() {
  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>The requested page does not exist.</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={{ span: 4, offset: 4 }}>
          <Button block as={Link} to="/">Home</Button>
        </Col>
      </Row>
    </Fragment>
  );
}