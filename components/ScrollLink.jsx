"use client";

import Link from "next/link";

export default function ScrollLink({ href, children, onClick = () => {} }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="cursor-pointer hover:text-white transition"
    >
      {children}
    </Link>
  );
}
