/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/certifications.ts

   Description
   -----------------------------------------------------------------------------
   Static certification data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ Certifications Section
   ✓ About Page
   ✓ Resume Page
   =============================================================================
*/

export interface Certification {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly issued: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly skills: readonly string[];
  readonly featured?: boolean;
}

export const certifications: readonly Certification[] = [];

export default certifications;