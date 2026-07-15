import Link from "next/link";

import { Home, SearchX } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

/* -------------------------------------------------------------------------- */
/* Global Not Found Page                                                      */
/* -------------------------------------------------------------------------- */

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-16">
      <Container className="max-w-2xl">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          {/* ---------------------------------------------------------------- */}
          {/* Icon                                                             */}
          {/* ---------------------------------------------------------------- */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Content                                                          */}
          {/* ---------------------------------------------------------------- */}

          <h1 className="mt-8 text-4xl font-bold tracking-tight">
            404 — Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Try returning to the homepage or continue browsing our
            products.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* Actions                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                        <Button
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}