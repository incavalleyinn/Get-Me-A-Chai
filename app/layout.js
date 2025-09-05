import './globals.css';
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModalProvider from "@/components/ModalProvider";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // <-- Import from API route
import { ToastContainer , toast } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai",
  description: "A sweet sip of gratitude for your favorite creators.",
  icons: {
    icon: '/tea.png',
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // No need for req/res in layout.js
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`} >
        <SessionWrapper session={session}>
          <ModalProvider>
            <div className="background1">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ModalProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}