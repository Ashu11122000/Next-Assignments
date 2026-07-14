import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Logo from "@/components/layout/Logo";
import { SITE_CONFIG } from "@/constants/site";
import { footerNavigation, socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Social Icons                                                               */
/* -------------------------------------------------------------------------- */

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ---------------------------------------------------------------- */}
          {/* Brand                                                            */}
          {/* ---------------------------------------------------------------- */}

          <div className="space-y-6 lg:col-span-4">
            <Logo />

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/products">
                Explore Products

                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Shop Links                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Company                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Customer                                                        */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Customer
            </h3>

            <ul className="space-y-3">
              {footerNavigation.customer.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Connect                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[
                    social.label as keyof typeof socialIcons
                  ];

                if (!Icon) {
                  return null;
                }

                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "rounded-xl border border-border p-3",
                      "transition-all duration-200",
                      "hover:bg-primary hover:text-primary-foreground",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{SITE_CONFIG.contact.email}</p>

              <p>{SITE_CONFIG.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Bottom Bar                                                         */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>{SITE_CONFIG.copyright}</p>

          <p>
            Built with{" "}
            <span className="font-medium text-foreground">
              Next.js 16
            </span>{" "}
            &{" "}
            <span className="font-medium text-foreground">
              Tailwind CSS
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}