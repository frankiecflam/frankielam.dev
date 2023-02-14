"use client";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useState, useEffect } from "react";

function getUserDarkModePreference() {
  const darkModeQueryMatch = window.matchMedia("(prefers-color-scheme: dark)");

  return darkModeQueryMatch.matches;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const isDarkModeEnabledByUser = getUserDarkModePreference();

    setTheme(isDarkModeEnabledByUser ? "dark" : "light");
  }, []);

  return (
    <html lang="en" className={theme}>
      <head />
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Header
          theme={theme}
          onThemeToggle={() =>
            setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
          }
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
