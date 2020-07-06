import React from "react";
import parse from "html-react-parser";
import "./AboutAutoZone.css";
import MockData from "../MockData/Mock.json";

export default function About() {
  return parse(MockData[0].about.content);
}
