"use client";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/providers/ThemeProvider";
import i18next from "i18next";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRerender, setIsRerender] = useState(false);
  if (typeof window !== "undefined" && window.localStorage) {
    const locale = window.localStorage.getItem("locale");
    if (locale && i18next.language && locale !== i18next.language) {
      i18next.changeLanguage(locale);
      setIsRerender(!isRerender);
    }
  }

  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <ThemeProvider>
            <ToastContainer theme="dark" />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
