import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Providers from "./provider";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/CartContext";
import "react-toastify/dist/ReactToastify.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Ecommerce website",
  description: "An online shopping groceries store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <AuthProvider>
            <CartProvider>
              {children}
              <ToastContainer
                limit={1}
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </CartProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
