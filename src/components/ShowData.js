import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Logout from "./Logout";
import UploadFile from "./UploadFile";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const toggleChange = () => {
    setIsChanged(!isChanged);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3010/api/file")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [isChanged]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-evenly">
        <UploadFile toggleChange={toggleChange} />
        <Logout />
      </div>
      <Table
        className="w-75 m-auto mt-3 text-center"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, i) => (
              <tr key={i}>
                <td>{JSON.parse(item.jsonObj.value).firstName}</td>
                <td>{JSON.parse(item.jsonObj.value).lastName}</td>
                <td>{JSON.parse(item.jsonObj.value).address}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default ShowData;
