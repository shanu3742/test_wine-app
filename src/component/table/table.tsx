import React from 'react';
import './table.css';
import { TableProps } from '../../app.type';



const Table: React.FC<TableProps> = ({ tableList, mathOperatorToRender }) => {
  return (
    <div>
      <h1>{tableList['1'].name} Table</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(tableList).map((tableKey, tableIndex) => {
              return <th key={`class-${tableKey}`}>Class {tableKey}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {mathOperatorToRender.map((mathOperator, index) => {
            return (
              <tr key={`table-body-row-${mathOperator}-${index}`}>
                <td>
                  <div>
                    <b>{tableList[`${index + 1}`].name}</b>
                  </div>
                  <div>
                    <b>{mathOperator}</b>
                  </div>
                </td>
                {Object.keys(tableList).map((tableKey, tableIndex) => {
                  return (
                    <td
                      key={`table-body-button-${tableKey}-${tableIndex}`}
                    >
                      {Array.isArray(tableList[`${tableIndex + 1}`][mathOperator])
                        ? tableList[`${tableIndex + 1}`][mathOperator].join(', ')
                        : tableList[`${tableIndex + 1}`][mathOperator]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
