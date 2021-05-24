import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { AuthProvider } from "./contexts/AuthContext";
import { auth } from "../src/firebase";
import './login.css';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // try {
    // setError("");
    setLoading(true);
    // console.log(emailRef.current.value, passwordRef.current.value, "user Data");

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((data) => {
        console.log(data.message, "message");
        setError(data.message);
        history.push("/main");
        
      })
      .catch((err) => {
        console.log(err, "message");
        console.log(err.message, "msg");
        setError("Could not Login.");
      });
    setLoading(false);
  }

  return (
    <AuthProvider>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mt-4">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                
                  <Button disabled={loading} className="w-100" type="submit">
                   Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Don't have an account yet?<Link to="/">Sign Up</Link> 
            </div>
          </>
        </div>
      </Container>
    </AuthProvider>
  );
}