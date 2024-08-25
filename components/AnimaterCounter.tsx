"use client";
import React from "react";
import CountUp from "react-countup";

const AnimaterCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} end={amount} decimal="," prefix="$" />
    </div>
  );
};

export default AnimaterCounter;
