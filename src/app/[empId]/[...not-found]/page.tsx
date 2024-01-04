"use client";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-bounce-scale flex justify-center">
          <Image
            src="/Icon.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "8rem", height: "auto" }}
            alt="Error"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          404 - Not Found
        </h1>
        <p className="text-lg text-gray-600 mt-2 mb-12">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          href="/123"
          className="text-gray-600 mt-8 font-mono text-lg bg-gray-200 shadow-2xl transition-all duration-400 border border-transparent rounded-lg p-3 hover:shadow-md"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
