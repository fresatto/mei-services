import React from "react";
import colors from "tailwindcss/colors";

import Spinner from "./Spinner";

const PageLoading: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <Spinner color={colors.gray[900]} size={40} />
    </div>
  );
};

export default PageLoading;
