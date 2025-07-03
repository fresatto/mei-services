import React, { PropsWithChildren } from "react";
import Button from "./Button";
import Link from "next/link";

type PageTitleProps = {
  showButton?: boolean;
};

const PageTitle: React.FC<PropsWithChildren<PageTitleProps>> = ({
  children,
  showButton = false,
}) => {
  return (
    <div className="flex justify-between items-center h-10 mb-10">
      <h1 className="text-xl font-baloo-2 font-bold ">{children}</h1>
      {showButton && (
        <Button>
          <Link href="/new-service">Novo serviço</Link>
        </Button>
      )}
    </div>
  );
};

export default PageTitle;
