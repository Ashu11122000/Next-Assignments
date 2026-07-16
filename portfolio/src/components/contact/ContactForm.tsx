"use client";

/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/contact/ContactForm.tsx

   Description
   -----------------------------------------------------------------------------
   Production-ready reusable Contact Form.

   Features
   -----------------------------------------------------------------------------
   ✓ React Hook Form
   ✓ Zod Validation
   ✓ @hookform/resolvers
   ✓ TypeScript
   ✓ Responsive
   ✓ Accessible
   ✓ Sonner Toast
   ✓ Loading State
   ✓ Reusable UI Components
   ✓ Ready for Server Actions
   ✓ Premium Glass UI
   =============================================================================
*/

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Mail,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

import {
  contactSchema,
  type ContactFormValues,
} from "@/validations/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (
    values: ContactFormValues
  ) => {
    try {
      setIsSubmitting(true);

      /**
       * ----------------------------------------------------------
       * Future Integration
       * ----------------------------------------------------------
       * Replace this timeout with:
       *
       * • Next.js Server Action
       * • EmailJS
       * • Resend
       * • Nodemailer
       * • API Route
       * ----------------------------------------------------------
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      console.log(values);

      toast.success(
        "Your message has been sent successfully."
      );

      reset();
    } catch {
      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      {/* ==========================================================
          Name
      ========================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-slate-200"
        >
          Full Name
        </label>

        <Input
          id="name"
          type="text"
          placeholder="Ashish Sharma"
          autoComplete="name"
          leftIcon={<User className="h-4 w-4" />}
          state={errors.name ? "error" : "default"}
          aria-invalid={!!errors.name}
          aria-describedby={
            errors.name ? "name-error" : undefined
          }
          {...register("name")}
        />

        {errors.name && (
          <p
            id="name-error"
            className="text-sm text-red-400"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* ==========================================================
          Email
      ========================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-200"
        >
          Email Address
        </label>

        <Input
          id="email"
          type="email"
          placeholder="ashu11vats@gmail.com"
          autoComplete="email"
          leftIcon={<Mail className="h-4 w-4" />}
          state={errors.email ? "error" : "default"}
          aria-invalid={!!errors.email}
          aria-describedby={
            errors.email
              ? "email-error"
              : undefined
          }
          {...register("email")}
        />

        {errors.email && (
          <p
            id="email-error"
            className="text-sm text-red-400"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* ==========================================================
          Subject
      ========================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-slate-200"
        >
          Subject
        </label>

        <Input
          id="subject"
          type="text"
          placeholder="Let's build something amazing..."
          leftIcon={
            <MessageSquare className="h-4 w-4" />
          }
          state={
            errors.subject ? "error" : "default"
          }
          aria-invalid={!!errors.subject}
          aria-describedby={
            errors.subject
              ? "subject-error"
              : undefined
          }
          {...register("subject")}
        />

        {errors.subject && (
          <p
            id="subject-error"
            className="text-sm text-red-400"
          >
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* ==========================================================
          Message
      ========================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-200"
        >
          Message
        </label>

        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          resize="vertical"
          state={
            errors.message ? "error" : "default"
          }
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message
              ? "message-error"
              : undefined
          }
          {...register("message")}
        />

        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-red-400"
          >
            {errors.message.message}
          </p>
        )}
      </div>

            {/* ==========================================================
          Submit Button
      ========================================================== */}

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          loading={isSubmitting}
          rightIcon={<Send className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}