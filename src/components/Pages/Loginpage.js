import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
export default function LoginPage() {
  const navigate=useNavigate();
  const[password,setpassword]=useState()
  const[email,setemail]=useState()
  const emailchange=(e)=>{
    setemail(e.target.value);
  }
  const passwordchange=(e)=>{
    setpassword(e.target.value);
  }
  const Submitloginform=async(e)=>{
    e.preventDefault()
    const loginData={
      "email":email,
      "password":password,
    };
    try {
      const Result=await axios.post('http://127.0.0.1:5000/login',loginData);
      if(Result.status==200){
      console.log("",Result.data);
      navigate("/home") // homepage navigation 
      localStorage.setItem("jwt-token",Result.data.token);
      toast("succefully login")
    }
    } catch (error ) {
      toast("email or password is incorrect");
      console.log("passing wrong email and password",error);
    }
    
    

  }
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={7} lg={5} xl={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-center mb-4">Login</h3>

                <Form onSubmit={Submitloginform}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                    
                      required
                      onChange={emailchange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      
                      
                      required
                      onChange={passwordchange}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to="/elogin">
                      Login as Employee
                    </Link>
                  </div>

                  <Button type="submit" className="w-100" variant="primary">
                    Sign in
                  </Button>
                   <ToastContainer></ToastContainer>

                  <div className="text-center mt-3">
                    <span className="me-1">Don’t have an account?</span>
                    <Link to="/signup" className="text-decoration-none">
                      Create account
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
