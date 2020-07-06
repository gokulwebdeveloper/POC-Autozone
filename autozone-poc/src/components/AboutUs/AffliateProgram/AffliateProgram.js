import React from "react";
import parse from "html-react-parser";
import Data from "../MockData/Mock.json";

export default function AffliateProgram() {
  return parse(Data[0].affiliateProgram.content);
}
