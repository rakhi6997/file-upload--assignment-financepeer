import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Logout = () => {
  const history = useHistory();

  return (
    <>
      <Button
        variant="outline-warning"
        onClick={() => (localStorage.removeItem("user"), history.push("/"))}
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
