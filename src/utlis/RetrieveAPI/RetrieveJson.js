import axios from "axios";
import React, { useState, useEffect } from "react";

const RetrieveJson = (jsonUrl) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(jsonUrl)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [list, setList];
};

export default RetrieveJson;
