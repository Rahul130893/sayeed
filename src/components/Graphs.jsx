import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Graphs = () => {
  const data = [
    { name: "Jan", uv: 125000 },
    { name: "Feb", uv: 175000 },
    { name: "Mar", uv: 75000 },
    { name: "Apr", uv: 110000 },
    { name: "May", uv: 200000 },
    { name: "Jun", uv: 125000 },
    { name: "Jul", uv: 110000},
    { name: "Aug", uv: 160000 },
    { name: "Sept", uv: 200000 },
    { name: "Oct"},
    { name: "Nov"},
    { name: "Dec"},
    
  ];

  return (
    <BarChart
      width={1100}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 0" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        tickFormatter={(value) => `${value} `}
        axisLine={false}
        tickLine={{ stroke: "rgba(0, 0, 0, 0.2)", strokeWidth: 2 }}
      />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />

      <Bar dataKey="uv" fill="#15af50" barSize={20}  />
    </BarChart>
  );
};
