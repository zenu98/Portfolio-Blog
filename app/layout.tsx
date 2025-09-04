import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // 다양한 굵기
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: {
    template: `%s | NextJS-Pro`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansKR.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
