import React from "react";
import parse from "html-react-parser";
import RetrieveJson from "../../../utlis/RetrieveAPI/RetrieveJson";
import "./AffliateProgram.css";

export default function AffliateProgram() {
  const [list, setList] = RetrieveJson(
    "./src/components/AboutUs/MockData/Mock.json"
  );

  return list.length > 0 ? (
    parse(list[0].affiliateProgram.content)
  ) : (
    <div></div>
  );
}
