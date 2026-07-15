import type { Metadata } from "next";

import { notFound } from "next/navigation";

import ProductDescription from "@/components/product/ProductDescription";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import RelatedProducts from "@/components/product/RelatedProducts";
import { SITE_CONFIG } from "@/constants/site";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/* Static Params                                                              */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = products.find(
    (item) => item.id.toString() === id,
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description:
      product.shortDescription ?? product.description,
    openGraph: {
      title: product.name,
      description:
        product.shortDescription ?? product.description,
      images: [
        {
          url: product.thumbnail,
        },
      ],
      siteName: SITE_CONFIG.name,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Product Page                                                               */
/* -------------------------------------------------------------------------- */

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  /* ------------------------------------------------------------------------ */
  /* Product Lookup                                                           */
  /* ------------------------------------------------------------------------ */

  const product = products.find(
    (item) => item.id.toString() === id,
  );

  if (!product) {
    notFound();
  }

  /* ------------------------------------------------------------------------ */
  /* Related Products                                                         */
  /* ------------------------------------------------------------------------ */

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category.slug === product.category.slug,
    )
    .slice(0, 4);

  /* ------------------------------------------------------------------------ */
  /* Page Layout                                                              */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------------ */}
        {/* Gallery + Product Information                                      */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          <ProductInfo
            product={product}
          />
        </div>

                {/* ------------------------------------------------------------------ */}
        {/* Product Description                                                */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-16">
          <ProductDescription
            description={product.description}
          />
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Product Specifications                                             */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-12">
          <ProductSpecifications
            specifications={product.specifications}
          />
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Related Products                                                   */}
        {/* ------------------------------------------------------------------ */}

        <section className="mt-20">
          <RelatedProducts
            products={relatedProducts}
          />
        </section>
      </div>
    </main>
      );
}