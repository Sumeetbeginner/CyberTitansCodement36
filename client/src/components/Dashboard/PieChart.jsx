
import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const PieChart = ({ data }) => {
    return (
      <div style={{ height: '150px', width: '150px', marginTop: '55%' }}>
        <Pie data={data} />
      </div>
    );
  }
  
  export default PieChart;