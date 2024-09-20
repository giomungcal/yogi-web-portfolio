import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { MobileNav } from "../_components/common/MobileNav";
import FakeLoader from "../_components/layout/FakeLoader";
import InitialLoader from "../_components/layout/InitialLoader";
import {
  LoaderContextProvider,
  NavContextProvider,
} from "../_context/AppContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yogi's Space",
  description: "this is gio's web portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Danfo:ELSH@0..100&family=Kode+Mono:wght@400..700&family=Roboto+Flex:opsz,slnt,wght@8..144,-10,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavContextProvider>
          <LoaderContextProvider>
            {/* <InitialLoader /> */}
            <FakeLoader />
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                className: "kode-mono-regular bg-[#E5D3FB]",
                style: {
                  border: "2px solid black",
                  padding: "16px",
                  color: "black",
                  backgroundColor: "#E5D3FB",
                },
              }}
            />
            <MobileNav />
          </LoaderContextProvider>
        </NavContextProvider>
      </body>
    </html>
  );
}
