import logo from "./logo.svg";
import "./App.css";
import Login from "../src/components/Login";
import Logout from "./components/Logout";
import UploadFile from "./components/UploadFile";
import ShowData from "./components/ShowData";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route strict path="/show-data" component={ShowData} />
      </Router>

    </>
  );
}

export default App;
