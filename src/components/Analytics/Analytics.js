import React,{useContext} from 'react'
import "./analytics.scss"
import { Context } from '../../context'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Analytics() {
    const {date} = useContext(Context)
    console.log(date)
  return (
    <div className='container-analytic'>
    <div className='analytic'>
    <h3 className='text-analytic'>User Analytics</h3>
    <div className='color-text-title-chart'>
    <LineChart
      width={1450}
      height={400}
      data={date}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" className='names-of-date'/>
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#3361FF" />
    </LineChart>
    </div>
    </div>
    </div>
  );
}
export default Analytics;
