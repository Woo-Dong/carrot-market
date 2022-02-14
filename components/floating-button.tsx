import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ href, children }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 text-white">
        {children}
      </a>
    </Link>
  );
}
