"use client";
import "./globals.css";
import { useState, useEffect } from "react";

function userPreferDarkMode() {
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
    const isDarkModeEnabledByUser = userPreferDarkMode();

    setTheme(isDarkModeEnabledByUser ? "dark" : "light");
  }, []);

  return (
    <html lang="en" className={theme}>
      <head />
      <body>{children}</body>
    </html>
  );
}
