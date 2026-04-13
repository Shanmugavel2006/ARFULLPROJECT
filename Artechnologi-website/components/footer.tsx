"use client"

import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import Link from "next/link"

const footerLinks = {
Products: [
{ label: "AR Mind AI", href: "/products/ar-mind-ai" },
{ label: "CloudNexus", href: "/products/cloudnexus" },
{ label: "SecureVault", href: "/products/securevault" },
{ label: "DataPulse", href: "/products/datapulse" },
],
Resources: [
{ label: "Documentation", href: "/docs" },
{ label: "API Reference", href: "/api-reference" }, // ✅ FIXED
{ label: "Support", href: "/support" },
],
Legal: [
{ label: "Privacy Policy", href: "/privacy-policy" },
{ label: "Terms of Service", href: "/terms-of-service" },
{ label: "Cookie Policy", href: "/cookie-policy" },
{ label: "Security", href: "/security" },
{ label: "Compliance", href: "/compliance" },
],
}

const socials = [
{ icon: Linkedin, label: "LinkedIn", href: "#" },
{ icon: Twitter, label: "Twitter", href: "#" },
{ icon: Github, label: "GitHub", href: "#" },
{ icon: Mail, label: "Email", href: "#" },
]

export function Footer() {
return ( <footer className="relative border-t border-border bg-white"> <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">

      {/* Brand */}
      <ScrollReveal className="col-span-1 mb-4 lg:mb-0">
        <div className="flex items-center gap-3 mb-2">
          <img 
            src="/logo.jpeg" 
            alt="AR Technology Logo" 
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-bold text-foreground">
            AR <span className="text-primary">Technologi</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          Building enterprise-grade digital products that transform businesses
          and drive innovation at scale.
        </p>

        <div className="flex items-center gap-3 mt-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </ScrollReveal>

      {/* Links */}
      {Object.entries(footerLinks).map(([heading, links], index) => (
        <ScrollReveal key={heading} delay={0.1 * (index + 1)}>
          <h3 className="text-sm font-semibold text-foreground mb-4">
            {heading}
          </h3>

          <ul className="flex flex-col gap-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      ))}
    </div>

    {/* Bottom bar */}
    <ScrollReveal delay={0.6}>
      <div className="mt-6 pt-2 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AR Technology. All rights reserved.
        </p>

        {/* ✅ FIXED LINKS */}
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>

          <Link
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>

          <Link
            href="/cookie-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cookies
          </Link>
        </div>

      </div>
    </ScrollReveal>

  </div>
</footer>
  );
}
