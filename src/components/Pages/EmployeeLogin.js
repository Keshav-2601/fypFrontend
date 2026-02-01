import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function EmployeeLogin() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={7} lg={5} xl={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-center mb-4">Login</h3>

                <Form>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>
                  <Button type="submit" variant="success" className="w-100">
                    login
                  </Button>

                  <div className="text-center mt-3">
                    <span className="me-1"></span>
                    <Link to="/" className="text-decoration-none">
                      Back
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
