import NavBar from "@/components/Navbar";
import "./globals.css";
import { Inter, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} bg-gray-100 min-h-screen`}>
        <NavBar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
