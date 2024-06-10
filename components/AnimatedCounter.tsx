"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-full flex-center">
      <CountUp
        end={amount}
        decimal="."
        decimals={2}
        prefix="$"
        duration={2.75}
      />
    </p>
  );
};

export default AnimatedCounter;
