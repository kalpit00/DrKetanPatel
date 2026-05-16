import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mona Eye Hospital | Dr. Ketan Patel & Dr. Reena Patel",
  description: "Veteran M.S Ophthalmic Surgeons with 25 years of experience in Phacosurgery and Cataract Operations",
  keywords: "ophthalmologist, eye doctor, cataract surgery, phacosurgery, eye care, Vadodara, Gujarat",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
};

// Inline script that runs BEFORE React hydrates so the correct theme class is
// already on <html>, preventing a flash of incorrect theme on reload.
// Resolution order:
//   1. localStorage("theme")  ("light" | "dark") — returning visitors
//   2. fallback to light (default for first-time visitors)
const themeBootstrap = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) { /* no-op */ }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
