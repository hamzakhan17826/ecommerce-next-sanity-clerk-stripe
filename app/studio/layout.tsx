import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce website for shoppers",
  description: "Ecommerce website for educational purposes",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
