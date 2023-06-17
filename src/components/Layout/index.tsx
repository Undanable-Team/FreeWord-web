import { Ubuntu } from "next/font/google";
import Link from "next/link";
import React from "react";
import Header from "../Header";

interface props {
  children: React.ReactNode;
}
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

const Layout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={ubuntu.className}>{children}</main>
    </div>
  );
};

export default Layout;
