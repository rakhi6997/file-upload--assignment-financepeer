import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const loginAdmin = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    if (!username || !password) return;
    await axios
      .post("http://localhost:3010/api/user/login", credentials)
      .then((res) =>
        res.data && res.status === 200
          ? (localStorage.setItem("user", JSON.stringify(res.data)),
            history.push("/show-data"))
          : history.push("/")
      );
  };

  const onChange = (e) => {
    credentials[e.target.name] = e.target.value;
    setCredentials(credentials);
  };

  return (
    <>
      <Form
        style={{ marginTop: "25vh" }}
        onSubmit={(e) => e.preventDefault()}
        className="text-light w-50 mx-auto d-flex flex-column align-items-center h-100 justify-content-center"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="login"
            onChange={(e) => onChange(e)}
            name="username"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            onChange={(e) => onChange(e)}
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          variant="outline-success"
          className="text-center center"
          type="submit"
          onClick={(e) => loginAdmin(e)}
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
