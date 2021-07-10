import React from "react";
import "./style.scss";

function StatisticsPage(): JSX.Element {
  return (
    <main>
      <h2>Statistics</h2>
      <table>
        <thead>
          <th>Category</th>
          <th>Word</th>
          <th>Translation</th>
          <th>Train</th>
          <th>Right</th>
          <th>Wrong</th>
          <th>Errors</th>
        </thead>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </main>
  );
}

export default StatisticsPage;
