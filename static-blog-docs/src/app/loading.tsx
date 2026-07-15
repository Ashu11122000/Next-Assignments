/**
 * ============================================================================
 * Global Loading Page
 * ============================================================================
 *
 * Displayed while route segments are loading.
 * ============================================================================
 */

export default function Loading() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        <p className="mt-4 text-gray-600">
          Loading...
        </p>
      </div>
    </section>
  );
}