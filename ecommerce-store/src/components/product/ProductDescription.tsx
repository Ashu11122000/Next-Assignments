import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import type { ProductDescriptionProps } from "@/types/product";

/* -------------------------------------------------------------------------- */
/* Product Description                                                        */
/* -------------------------------------------------------------------------- */

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <section
      aria-labelledby="product-description-heading"
      className="py-12 sm:py-16"
    >
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* Section Heading                                                    */}
        {/* ------------------------------------------------------------------ */}

        <SectionHeading
          id="product-description-heading"
          badge="Overview"
          title="Product Description"
          description="Learn more about this product, including its features, design, and overall experience."
        />

                {/* ------------------------------------------------------------------ */}
        {/* Description Content                                                */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {description
              .split("\n")
              .filter((paragraph) => paragraph.trim().length > 0)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-5 text-base leading-8 text-muted-foreground last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}