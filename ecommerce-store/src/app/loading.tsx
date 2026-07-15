import Container from "@/components/common/Container";
import Skeleton from "@/components/common/Skeleton";

/* -------------------------------------------------------------------------- */
/* Global Loading UI                                                          */
/* -------------------------------------------------------------------------- */

export default function Loading() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Hero Skeleton                                                      */}
        {/* ------------------------------------------------------------------ */}

        <section className="space-y-6">
          <Skeleton className="h-6 w-32 rounded-full" />
          <Skeleton className="h-14 w-full max-w-3xl" />
          <Skeleton className="h-6 w-full max-w-2xl" />

          <div className="flex flex-wrap gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-xl" />
            <Skeleton className="h-12 w-40 rounded-xl" />
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Products Section Skeleton                                          */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20">
          <div className="space-y-4">
            <Skeleton className="h-5 w-28 rounded-full" />
            <Skeleton className="h-10 w-80" />
            <Skeleton className="h-5 w-full max-w-2xl" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border bg-background"
              >
                {/* ---------------------------------------------------------- */}
                {/* Product Image                                              */}
                {/* ---------------------------------------------------------- */}

                <Skeleton className="aspect-square w-full" />

                {/* ---------------------------------------------------------- */}
                {/* Product Content                                            */}
                {/* ---------------------------------------------------------- */}

                <div className="space-y-4 p-5">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />

                  <div className="pt-2">
                    <Skeleton className="h-5 w-28" />
                  </div>

                  <div className="pt-2">
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}