import "./globals.css";

export const metadata = {
  title: "d3-SVG",
  description: "d3 examples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
