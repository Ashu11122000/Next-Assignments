import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import type { ProductSpecificationsProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Specifications                                                     */
/* -------------------------------------------------------------------------- */

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <section
      aria-labelledby="product-specifications-heading"
      className="py-12 sm:py-16"
    >
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Section Heading                                                    */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          id="product-specifications-heading"
          badge="Technical Details"
          title="Product Specifications"
          description="Explore the key technical specifications and features of this product to help you make an informed purchasing decision."
        />

                {/* ------------------------------------------------------------------ */}
        {/* Specifications List                                                */}
        {/* ------------------------------------------------------------------ */}

        {specifications.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-border bg-muted/20 p-8 text-center">
            <p className="text-muted-foreground">
              Specifications are currently unavailable for this product.
            </p>
          </div>
        ) : (
          <dl className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            {specifications.map((specification, index) => (
              <div
                key={`${specification.label}-${index}`}
                className="grid gap-3 border-b border-border p-6 last:border-b-0 sm:grid-cols-[220px_1fr] sm:items-center"
              >
                {/* ---------------------------------------------------------- */}
                {/* Specification Label                                        */}
                {/* ---------------------------------------------------------- */}

                <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {specification.label}
                </dt>

                {/* ---------------------------------------------------------- */}
                {/* Specification Value                                        */}
                {/* ---------------------------------------------------------- */}

                <dd className="text-base font-medium leading-7 text-foreground">
                  {specification.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}