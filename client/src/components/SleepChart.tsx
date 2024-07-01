import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface SleepChartProps {
  data: { date: string; hours: number }[];
}

const SleepChart: React.FC<SleepChartProps> = ({ data }) => {
  const getOption = () => {
    const dates = data.map((entry) => entry.date);
    const hours = data.map((entry) => entry.hours);

    return {
      title: { text: 'Sleep Trend' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: dates,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: hours,
          type: 'bar',
        },
      ],
    };
  };

  return <ReactEcharts option={getOption()} />;
};

export default SleepChart;
