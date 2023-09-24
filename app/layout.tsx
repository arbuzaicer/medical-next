import { Inter } from "next/font/google";
import { FC } from "react";

import "./globals.css";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
