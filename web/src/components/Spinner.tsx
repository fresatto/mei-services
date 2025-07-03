import { SpinnerGapIcon } from "@phosphor-icons/react";
import React from "react";

type SpinnerProps = {
  color?: string;
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = ({ color = "#fff", size = 20 }) => {
  return <SpinnerGapIcon size={size} className="animate-spin" color={color} />;
};

export default Spinner;
