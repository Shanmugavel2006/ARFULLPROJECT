"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@artechnology.io" },
  { icon: Phone, label: "Phone", value: "+1 (650) 555-0198" },
  { icon: MapPin, label: "Headquarters", value: "San Francisco, CA 94105" },
]

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email address"
    if (!formState.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setFormState({ name: "", email: "", company: "", message: "" })
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              {"Let's Build Something Great"}
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Ready to transform your business with enterprise-grade technology?
              Get in touch with our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="flex items-center gap-3 mt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border border-border bg-secondary/50 overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
