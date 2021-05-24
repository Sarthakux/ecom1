import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { AuthProvider } from "./contexts/AuthContext";
import firebase from "firebase";
import { auth } from "../src/firebase";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("Passwords do not match");
      return setError("Passwords do not match");
    }

    // try {
    // setError("");
    setLoading(true);
    // console.log(emailRef.current.value, passwordRef.current.value, "user Data");

    auth
      .createUserWithEmailAndPassword(
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
        setError(err.message);
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
                <h2 className="text-center mt-4">SignUp</h2>
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
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                   {/* <Link to="/main">Si */}Sign UP
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </>
        </div>
      </Container>
    </AuthProvider>
  );
}