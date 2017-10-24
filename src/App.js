import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart width={600} height={300} data={data.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="report"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="groupa" stackId="a" fill="#8884d8" name="Group A" />
          <Bar dataKey="groupb" stackId="a" fill="#82ca9d" name="Group B" />
          <Bar dataKey="groupc" fill="#ffc658" name="Group C" />
      </BarChart>
      </div>
    );
  }
}

export default App;
