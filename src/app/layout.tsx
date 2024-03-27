import type { Metadata } from "next";
import ThemeSettingsManager from "./components/ThemeSettingsManager";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeSettingsManager>
        <body>{children}</body>
      </ThemeSettingsManager>
    </html>
  );
}
