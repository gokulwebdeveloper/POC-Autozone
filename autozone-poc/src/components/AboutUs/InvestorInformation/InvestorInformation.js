import React from "react";
import parse from "html-react-parser";
import RetrieveJson from "../../../utlis/RetrieveAPI/RetrieveJson";
import "./InvestorInformation.css";

export default function InvestorInformation() {
  const [list, setList] = RetrieveJson(
    "./src/components/AboutUs/MockData/Mock.json"
  );

  return list.length > 0 ? (
    parse(list[0].investorInformation.content)
  ) : (
    <div></div>
  );
}
