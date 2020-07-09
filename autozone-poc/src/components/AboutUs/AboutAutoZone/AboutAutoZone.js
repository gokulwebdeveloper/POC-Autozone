import React, { useEffect } from "react";
import parse from "html-react-parser";
import "./AboutAutoZone.css";
import RetrieveJson from "../../../utlis/RetrieveAPI/RetrieveJson";

export default function About() {
  const [list, setList] = RetrieveJson(
    "./src/components/AboutUs/MockData/Mock.json"
  );

  return list.length > 0 ? parse(list[0].about.content) : <div></div>;
}
