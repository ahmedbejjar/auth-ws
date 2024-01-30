import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions";

const Login = () => {
  const { loading, isAuth } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  };
  return (
    <div>
      {loading ? (
        <>
          <h1>Loading ...</h1>
        </>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/profile" />
      ) : (
        <>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="city"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Button type="submit">Login</Button>
          </Form>
          <Link to="/">
            {" "}
            you don't have an account ?
            <br />
            go to SignUp
          </Link>
        </>
      )}
    </div>
  );
};

export default Login;
