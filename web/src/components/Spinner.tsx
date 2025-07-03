import { SpinnerGapIcon } from "@phosphor-icons/react";
import React from "react";

type SpinnerProps = {
  color?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ color = "#fff" }) => {
  return <SpinnerGapIcon size={20} className="animate-spin" color={color} />;
};

export default Spinner;
