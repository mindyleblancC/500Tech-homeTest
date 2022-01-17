import React from 'react';

const getTHead = (data, config) => {
  let field;
  let title;
  return (
    <thead>
      <tr>
        {Object.keys(data[0]).map((val, k) => (
          field = config.find(config => config['field'] === val),
          title = field && field.title,
          <th key={k} feild={val} title={title}>{val}</th>))}
      </tr>
    </thead>
  );
}

const getTRow = (data, config) => {
  let value;
  let field;
  return (
    data.map((obj) => (
      < tr >
        {Object.keys(obj).map((key, k) => (
          field = config.find(config => config['field'] === key),
          value = (field && field.component ? <field.component data={obj[key]}/> : obj[key]),
          <td key={k}>{value}</td>
        ))}
      </tr >
    )));
}

const Grid = ({ config, data }) => (
  <table>
    {getTHead(data, config)}
    <tbody>
      {getTRow(data, config)}
    </tbody>
  </table>
);

export default Grid;