import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  { country: 'Spain', years: 12.5 },
  { country: 'Canada', years: 1.5 },
  { country: 'USA', years: 9 },
];

const config = {
  Spain: { label: 'Spain', color: '#3b82f6' },
  Canada: { label: 'Canada', color: '#06b6d4' },
  USA: { label: 'USA', color: '#a855f7' },
};

const legendPayload = data.map((item) => ({
  value: item.country,
  dataKey: item.country,
  color: config[item.country as keyof typeof config].color,
}));

const InternationalExperienceChart: React.FC = () => (
  <ChartContainer className="w-full h-72" config={config}>
    <PieChart>
      <Pie
        data={data}
        dataKey="years"
        nameKey="country"
        cx="50%"
        cy="50%"
        outerRadius={80}
        labelLine={false}
        label={({ name, value }) => `${name}: ${value}`}
      >
        {data.map((entry) => (
          <Cell
            key={entry.country}
            fill={config[entry.country].color}
          />
        ))}
      </Pie>
      <ChartTooltipContent nameKey="country" />
      <ChartLegendContent payload={legendPayload} />
    </PieChart>
  </ChartContainer>
);

export default InternationalExperienceChart;
