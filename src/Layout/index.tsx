import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};
