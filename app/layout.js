import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "E-commerce Site",
    description: "A simple e-commerce site built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
