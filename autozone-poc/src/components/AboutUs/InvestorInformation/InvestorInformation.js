import React from "react";
import Data from "../MockData/Mock.json";

export default function InvestorInformation() {
  const FilterData = () => {
    let data;
    Data.map((item, i) => {
      if (Object.keys(item) == "investorInformation")
        data = item.investorInformation;
    });
    return data;
  };

  const FilteredData = FilterData();

  return (
    <div className="container-fluid px-5">
      <div className="row">
        <div className="w-100">
          <img
            className="float-right investor-logo"
            src={FilteredData[0].image}
          />
        </div>
      </div>
      <div className="row">
        <div className="w-100 text-center">
          <img
            className="img-fluid investor-information-image"
            src={FilteredData[1].image}
          />
        </div>
      </div>
      <div className="row">
        <h3>{FilteredData[2].title}</h3>
        <p>{FilteredData[2].para1}</p>
      </div>
      <div className="row">
        <h3>{FilteredData[3].title}</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              {Object.keys(FilteredData[3].tableData[0]).map((item, i) => (
                <th key={i}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FilteredData[3].tableData.map((item, i) => (
              <tr key={i}>
                <td>{item.Date}</td>
                <td>{item["Title and Summary"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
