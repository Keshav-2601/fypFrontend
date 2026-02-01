import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Card, Button ,Form} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function Createlogin() {
const[name,setname]=useState()
const[email,setEmail]=useState()
const[password,setpassword]=useState()
const[address,setaddress]=useState()

const onchangeName=(e)=>{
  setname(e.target.value);
}
const onchangeEmail=(e)=>{
  setEmail(e.target.value);
}
const onchangePassword=(e)=>{
  setpassword(e.target.value);
}
const onchangeAddress=(e)=>{
  setaddress(e.target.value);
}
const createuser=async(e)=>{
  e.preventDefault();
  console.log("my data which i am sending to form ");
  console.log(name,email,address,password);
  const json_body={
    "name":name,
    "email":email,
    "address":address,
    "password":password
  };
  const Result=await axios.post("http://127.0.0.1:5000/createuser",json_body)
  if(Result.status==201){
    alert("result successfully");
    console.log(Result);
  }
}
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={7} lg={5} xl={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-center mb-4">Create Account</h3>

                <Form onSubmit={createuser}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={onchangeName} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"  onChange={onchangeEmail}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                      onChange={onchangePassword}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      onChange={onchangeAddress}
                    />
                  </Form.Group>

                  <Button type="submit" variant="success" className="w-100">
                    Create account
                  </Button>

                  <div className="text-center mt-3">
                    <span className="me-1">Already have an account?</span>
                    <Link to="/" className="text-decoration-none">
                      Login
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
