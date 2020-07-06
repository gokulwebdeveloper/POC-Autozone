import React from "react";
import parse from "html-react-parser";
import MockData from "../MockData/Mock.json";
import "./InvestorInformation.css";

export default function InvestorInformation() {
  return parse(MockData[0].investorRelations.content);
}
