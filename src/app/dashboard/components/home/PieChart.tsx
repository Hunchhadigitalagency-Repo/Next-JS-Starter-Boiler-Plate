import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      id: 'basic-pie',
    },
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  };

  const series = [44, 55, 13, 43, 22];

  return <ReactApexChart options={options} series={series} type="pie" height={350} />;
};

export default PieChart;
