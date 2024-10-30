import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 h-14 flex items-center justify-center">
      <h1 className="text-white text-center">
        MADE BY{" "}
        <Link
          href="https://www.linkedin.com/in/syeda-urooj-fatima-7078942b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          SYEDA UROOJ FATIMA NAQVI
        </Link>
      </h1>
    </footer>
  );
}
