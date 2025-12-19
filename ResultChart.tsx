import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ResultChartProps {
  labels: string[];
  data: number[];
}

const ResultChart: React.FC<ResultChartProps> = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Test Results',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Test Results Analysis</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ResultChart;