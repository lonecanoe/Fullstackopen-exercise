import React from 'react';

const StatisticLine = ({ text, value }) => (
  <tr>
    <td className="pr-4">{text}</td>
    <td>{value}</td>
  </tr>
);

export default StatisticLine;
