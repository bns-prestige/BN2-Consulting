import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BN2 HUB — Espace client",
  description: "Votre espace de support informatique BN2 Consulting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
