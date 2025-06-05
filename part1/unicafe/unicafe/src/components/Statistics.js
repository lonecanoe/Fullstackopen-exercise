import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  
  // 只有在收集到反馈后才显示统计信息
  if (total === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">statistics</h2>
      <table className="border-collapse">
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
