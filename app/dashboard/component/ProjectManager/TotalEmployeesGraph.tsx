"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 40, style: { fill: "red", opacity: 1 } }, // Apply red fill color with opacity 1
  { value: 32, style: { fill: "#0000ff", opacity: 1 } }, // Apply blue fill color with opacity 1
];

const size = {
  width: 280,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left / 2 + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function TotalEmployeesGraph({ totalEmloyeesCount, count, color }: any) {
  const data = [
    {
      value: totalEmloyeesCount - count,
    },
    { value: count },
  ];
  const overrideStyles = {
    "& .MuiPieArc-root": {
      fill: "red",
    },
  };
  const colors = [color, "#E6E6E6"];
  return (
    <PieChart
    className="dddddsss"
      series={[{ data, innerRadius: 70 }]}
      {...size}
      sx={overrideStyles}
      colors={colors}
      tooltip={false}
    >
      <PieCenterLabel>{count}</PieCenterLabel>
    </PieChart>
  );
}

export default TotalEmployeesGraph;
