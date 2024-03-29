import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"; // or `v14-appRouter` if you are using Next.js v14
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AppProvider } from "@/context/Store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koin Clothing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <main className="min-h-screen">
              <div className="w-full h-[30px] bg-black flex items-center justify-center">
                <div className="text-white text-xs">
                  ƯU ĐÃI - Giảm ngay <b>5%</b> trên tổng đơn hàng khi mua 2 sản
                  phẩm
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className="max-w-[1480px] w-full">
                  <Navbar />
                </div>
                <div className="w-full">{children}</div>
                <Footer />
              </div>
            </main>
          </AppRouterCacheProvider>
        </AppProvider>
      </body>
    </html>
  );
}
