import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import localFont from "next/font/local";

const alagard = localFont({
  src: "./fonts/alagard.ttf",
  variable: "--font-alagard",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${alagard.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>    
  )
}  

