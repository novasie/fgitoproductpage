import Footer from "@/components/shared/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fgito",
  description: "ghar ka khana ghar se dur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "max-w-screen-2xl mx-auto")}>
        <div className="flex flex-col justify-between">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
