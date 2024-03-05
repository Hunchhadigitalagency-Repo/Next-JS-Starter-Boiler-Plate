"use client"
import React from "react";
import LineChart from "./components/home/LIneChart";
import PieChart from "./components/home/PieChart";
import BarChart from "./components/home/BarChart";

const page = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <LineChart />
        </div>
        <div className="md:col-span-1">
          <PieChart />
        </div>
        <div className="md:col-span-2">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default page;
