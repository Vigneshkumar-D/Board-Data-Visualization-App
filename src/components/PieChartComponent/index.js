import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import './index.css'

const data = [
  {
    percentage: 55,
    language: "Basic Tees",
  },
  {
    percentage: 31,
    language: "Custom Short Pants",
  },
  {
    percentage: 14,
    language: "Super Hoodies",
  },
]

const PieChartComponent = () => {
  const screenWidth = window.innerWidth;

//   // Define media query breakpoints
  const smallScreenBreakpoint = 768;

//   // Determine the cell position based on screen width
  const cellPosition = screenWidth < smallScreenBreakpoint ? 'outside' : 'inside';

//   // Determine the font size based on screen width
  const fontSize = screenWidth < 768 ? 10 : 14
  const labelOffset = screenWidth < smallScreenBreakpoint ? 30 : 10;

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <PieChart>
        <Pie
          cx="50%" 
          cy="50%"
          data={data}
          startAngle={270}
          endAngle={-90}
          innerRadius={0} 
          paddingAngle={0} 
          outerRadius="100%"
          dataKey="percentage"
         
        >
          <Cell name="Basic Tees"
          fill="#98D89E" labelOffset={20} 
          />
          <Cell name="Custom Short Pants" 
          content={<CustomLabel text="Basic Tees" percentage="55%" />} 
          fill="#F6DC7D" labelOffset={labelOffset} 
          style={{labelPosition: cellPosition, fontSize: `${fontSize}px !important` }} />
          <Cell name="Super Hoodies" 
          content={<CustomLabel text="Basic Tees" percentage="55%" />}
          fill="#EE8484" labelOffset={labelOffset} 
          style={{ labelPosition: cellPosition, fontSize: `${fontSize}px !important` }} />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align='right'
          // height={60}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

const CustomLabel = ({ text, percentage }) => (
  <text>{percentage}</text>
);

export default PieChartComponent