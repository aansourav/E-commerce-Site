import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/cart-context";
import { ListTypeProvider } from "@/context/list-type-context";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "E-commerce Site",
    description: "A simple e-commerce site built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <ListTypeProvider>
                    <CartProvider>{children}</CartProvider>
                </ListTypeProvider>
                <Footer />
            </body>
        </html>
    );
}
