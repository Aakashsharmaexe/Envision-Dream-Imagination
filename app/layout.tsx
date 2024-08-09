import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Envision",
  description: "Dream Imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          socialButtonsBlockButton: "bg-[#272727]",
          logoImage: "w-[150px] h-[50px]",
          footerActionLink: "text-white",
          formButtonPrimary: "text-white",
        },
        variables: { colorPrimary: "#000000", colorText: "white" },
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
