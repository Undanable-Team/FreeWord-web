import { Oswald } from "next/font/google";
import React from "react";
const oswald = Oswald({ subsets: ["latin"] });
const Header = () => {
  return <header className={oswald.className}>Header</header>;
};

export default Header;
