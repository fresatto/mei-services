import React, { PropsWithChildren } from "react";

const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-xl font-baloo-2 font-bold">{children}</h1>;
};

export default PageTitle;
