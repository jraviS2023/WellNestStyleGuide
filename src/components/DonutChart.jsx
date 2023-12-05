import React, { useState } from "react";
import {
  Button,
  IconButton,
  Typography,
  CircularProgress
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function DonutChart() {
  const [popIndex, setPopIndex] = useState(null);

  const data = [
    { category: "Happy", value: 73 },
    { category: "Neutral", value: 15 },
    { category: "Sad", value: 12 }
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const handleMouseEnter = (index) => {
    setPopIndex(index);
  };

  const handleMouseLeave = () => {
    setPopIndex(null);
  };

  const getBarStyles = (index) => {
    const isPopped = popIndex === index;
    const thickness = isPopped ? 20 : 9;

    return {
      thickness,
      color: index === 0 ? "#0077B6" : index === 1 ? "#00B4D8" : "#03045E",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out", // Add transition
        transform: isPopped ? "scale(1.5)" : "scale(1)" // Scale on hover
      }
    };
  };

  return (
    <div
      style={{
        position: "relative",
        width: 223,
        height: 223,
        marginTop: 20
      }}
    >
      {/* White center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "white"
        }}
      ></div>
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            ...getBarStyles(index)
          }}
        >
          <CircularProgress
            variant="determinate"
            value={(item.value / totalValue) * 100}
            size={223}
            thickness={getBarStyles(index).thickness}
            style={{ color: getBarStyles(index).color }}
            sx={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      ))}
      <Typography
        variant="caption"
        component="div"
        color="textSecondary"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 25 // Change the font size as needed
        }}
      >
        {totalValue}%
      </Typography>
    </div>
  );
}

export default DonutChart;
