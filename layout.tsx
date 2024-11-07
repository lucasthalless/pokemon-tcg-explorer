import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Pokemon TCG Explorer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
        <footer>
          Lucas Thalles dos Santos - RM 558886
          Carolina Estevam Rodgerio - RM 554975
          Enrico Andrade D'amico - RM 557706
        </footer>
      </body>
    </html>
  );
}