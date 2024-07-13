import Copyright from "@/components/shared/Copyright";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fgito",
  description: "ghar ka khana ghar se dur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "max-w-screen-2xl mx-auto min-h-screen"
        )}
      >
        <div className="flex items-center min-h-[calc(100vh-42px)] flex-col justify-start">
          {children}
        </div>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
