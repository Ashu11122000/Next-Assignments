/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/validations/contact.ts

   Description:
   -----------------------------------------------------------------------------
   Zod validation schema for the Contact Form.

   Features
   -----------------------------------------------------------------------------
   ✓ Type-safe validation
   ✓ React Hook Form compatible
   ✓ Server Action ready
   ✓ Reusable across the application
   ✓ Next.js 16
   ✓ React 19
   ✓ TypeScript
   =============================================================================
*/

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email cannot exceed 255 characters."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject cannot exceed 150 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;