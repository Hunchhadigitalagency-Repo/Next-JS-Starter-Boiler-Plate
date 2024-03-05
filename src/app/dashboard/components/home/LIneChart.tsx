import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      id: 'basic-line',
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

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default LineChart;
