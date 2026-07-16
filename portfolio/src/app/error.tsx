"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <button
          onClick={reset}
          className="rounded-lg bg-cyan-500 px-5 py-2 text-white"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}