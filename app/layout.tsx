import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // 다양한 굵기
  variable: "--font-noto-sans-kr",
});

const pretendard = localFont({
  src: [
    {
      path: "../assets/styles/fonts/pretendard/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/styles/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/styles/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/styles/fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/styles/fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: {
    template: `%s | 마이포폴`,
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
      <body className={`${pretendard.className}  antialiased`}>
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
