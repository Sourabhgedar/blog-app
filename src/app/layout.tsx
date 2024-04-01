import type { Metadata } from "next";
import ThemeSettingsManager from "./components/ThemeSettingsManager";
import { StoreProvider } from '../app/storeProvider'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false })

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeSettingsManager>
          <body>
            <Navbar />
            {children}
          </body>
        </ThemeSettingsManager>
      </StoreProvider>
    </html>
  );
}
