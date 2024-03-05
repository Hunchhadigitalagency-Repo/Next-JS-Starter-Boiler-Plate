import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
};

export default BarChart;
