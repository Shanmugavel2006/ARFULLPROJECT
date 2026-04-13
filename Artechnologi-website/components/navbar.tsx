"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, ArrowRight, ChevronDown } from "lucide-react"


const navLinks = [
  { label: "Who we are", href: "#about" },
  { label: "Why Us", href: "#stats" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
]

const linksWithDropdownIcon = new Set(["#about", "#products", "#stats"])

// Dropdown content for each section with mega menu structure
const dropdownContent: Record<string, {
  title: string
  description: string
  links: Array<{ name: string; hasSubmenu?: boolean }>
  ctaText: string
  ctaHref: string
}> = {
  "#about": {
    title: "Driving Innovation Forward",
    description: "At AR Technology, we don't just build solutions. We create transformative experiences that empower businesses to become perpetually adaptive enterprises, built to evolve continuously and confidently in a world of constant change.",
    links: [
      { name: "Our Story", href: "/our-story" },
      { name: "Leadership Team", href: "/leadership-team" },
      { name: "Mission & Vision", href: "/mission-vision" },
      { name: "Global Presence", href: "/global-presence" },
      { name: "Culture & Values", href: "/culture-values" },
    ],
    ctaText: "Discover our journey",
    ctaHref: "#about",
  },
  // "#products": {
  //   title: "Intelligent Solutions",
  //   description: "We deliver cutting-edge technology solutions that transform businesses. Our comprehensive portfolio of products and platforms is designed to drive digital excellence and accelerate your path to innovation.",
  //   links: [],
  //   ctaText: "View all solutions",
  //   ctaHref: "#products",
  // },
  "#stats": {
    title: "Excellence in Every Interaction",
    description: "Our commitment to excellence is reflected in everything we do. We combine industry-leading expertise with innovative technology to deliver unparalleled value, ensuring your success is our top priority.",
    links: [
      { name: "Quality & Reliability", href: "/why-us/quality-reliability" },
      { name: "Expert Consulting", href: "/why-us/expert-consulting" },
      { name: "24/7 Global Support", href: "/why-us/24-7-global-support" },
      { name: "Innovation Lab", href: "/why-us/innovation-lab" },
      { name: "Security & Compliance", href: "/why-us/security-compliance" },
    ],
    ctaText: "Why choose us",
    ctaHref: "#stats",
  },
}

const NavLink = ({
  label,
  href,
  onClick,
  hasDropdownIcon,
}: {
  label: string
  href: string
  onClick: () => void
  hasDropdownIcon: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (hasDropdownIcon) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
      setShowDropdown(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (hasDropdownIcon) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setShowDropdown(false)
      }, 200)
    }
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setShowDropdown(true)
  }

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false)
    }, 200)
  }

  const content = dropdownContent[href]

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.button
        onClick={onClick}
        className="relative px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium overflow-hidden group inline-flex items-center gap-0.5"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="relative z-10 transition-colors duration-300"
          animate={isHovered ? {
            backgroundImage: [
              "linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",
              "linear-gradient(to right, rgb(37, 99, 235), rgb(6, 182, 212), rgb(147, 51, 234))",
              "linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",
            ],
          } : {
            backgroundImage: "linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",
          }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
        >
          <span>{label}</span>
        </motion.span>
        {hasDropdownIcon && href !== "#products" && (
          <motion.div
            animate={{ rotate: showDropdown ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 ml-0.5"
          >
            <ChevronDown className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-foreground" />
          </motion.div>
        )}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isHovered ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-secondary/50 rounded-lg -z-0"
        />
      </motion.button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {showDropdown && hasDropdownIcon && content && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            className="fixed top-[80px] lg:top-[112px] left-0 right-0 w-screen bg-[#2d2d2d] text-white shadow-2xl z-50"
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Column - Description */}
                <div className="py-12 pr-0 md:pr-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
                      {content.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  <motion.a
                    href={content.ctaHref}
                    onClick={(e) => {
                      e.preventDefault()
                      onClick()
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 text-white font-semibold mt-10 text-lg group"
                  >
                    <span>{content.ctaText}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Right Column - Links */}
                <div className="py-8 md:py-12 md:pl-12 flex flex-col justify-center border-l-0 md:border-l border-gray-600">
                  <div className="flex flex-col gap-0">
                    {content.links.map((link) => (
                      <motion.button
                        key={link.name}
                        onClick={() => {
                          if ((link as any).href) {
                            // fallback navigation for submenu items
                            window.location.href = (link as any).href
                          } else {
                            onClick()
                          }
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between py-4 px-0 text-left text-gray-300 hover:text-white border-b border-gray-600 last:border-b-0 group"
                      >
                        <span className="text-base font-normal">{link.name}</span>
                        {link.hasSubmenu && (
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const TypewriterNavbar = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "AR Technologi"
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const indexRef = useRef(0)

  useLayoutEffect(() => {
    // Reset animation on mount
    setDisplayedText("")
    setIsTypingComplete(false)
    indexRef.current = 0

    // Start typing animation
    const startAnimation = () => {
      if (indexRef.current <= fullText.length) {
        setDisplayedText(fullText.substring(0, indexRef.current))
        indexRef.current++
        
        if (indexRef.current <= fullText.length) {
          intervalRef.current = setTimeout(startAnimation, 80)
        } else {
          setIsTypingComplete(true)
        }
      }
    }

    // Start immediately
    startAnimation()

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [])

  const renderTextWithColor = () => {
    const arPart = displayedText.substring(0, Math.min(3, displayedText.length))
    const techPart = displayedText.substring(3)

    return (
      <>
        <span className="text-foreground">{arPart}</span>
        <span className="text-primary">{techPart}</span>
      </>
    )
  }

  return (
    <span className="text-lg lg:text-2xl font-bold tracking-tight relative inline-block">
      {renderTextWithColor()}
      {!isTypingComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 lg:h-7 ml-0.5 bg-gradient-to-r from-primary to-secondary"
        />
      )}
    </span>
  )
}

export function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Reset animation after loading screen ends
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey(prev => prev + 1)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Reset mobile expanded item when menu closes
  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpandedItem(null)
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setMobileExpandedItem(null)
    if (!href) return
    // internal page path
    if (href.startsWith("/")) {
      try {
        router.push(href)
      } catch (e) {
        window.location.href = href
      }
      return
    }
    // section hash -> scroll
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border shadow-lg shadow-black/5"
          : "bg-white"
      }`}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex h-20 lg:h-28 items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-1 lg:gap-2 flex-shrink-0"
          >
            <motion.img 
              src="/logo.jpeg" 
              alt="AR Technology Logo" 
              className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <span className="relative inline-block w-48 lg:w-64">
              <TypewriterNavbar key={animationKey} />
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                hasDropdownIcon={linksWithDropdownIcon.has(link.href)}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
            </motion.button>
          </div>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden p-2 text-foreground ml-auto"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const hasDropdownIcon = linksWithDropdownIcon.has(link.href)
                const isExpanded = mobileExpandedItem === link.href
                const content = dropdownContent[link.href]

                return (
                  <div key={link.href}>
                    <motion.button
                      onClick={() => {
                        if (hasDropdownIcon && content) {
                          setMobileExpandedItem(isExpanded ? null : link.href)
                        } else {
                          handleNavClick(link.href)
                        }
                      }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="w-full text-left px-4 py-3 text-base font-medium text-black hover:text-black hover:bg-secondary/50 rounded-lg transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10 inline-flex items-center gap-1.5 w-full justify-between">
                        <span>{link.label}</span>
                        {hasDropdownIcon && (
                          <span className="inline-flex items-center justify-center ml-0.5 text-[18px] leading-none font-normal text-current relative top-[1px]">
                            ^
                          </span>
                        )}
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                        className="absolute inset-0 bg-secondary/30 -z-0 rounded-lg"
                      />
                    </motion.button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {isExpanded && hasDropdownIcon && content && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 ml-2 p-4 bg-[#2d2d2d] rounded-lg">
                            <h4 className="text-base font-bold text-white mb-2">
                              {content.title}
                            </h4>
                            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                              {content.description}
                            </p>
                            <div className="flex flex-col gap-1 mb-4">
                              {content.links.map((item) => (
                                <motion.button
                                  key={item.name}
                                  onClick={() => {
                                    if ((item as any).href) {
                                      try {
                                        router.push((item as any).href)
                                      } catch (e) {
                                        window.location.href = (item as any).href
                                      }
                                    } else {
                                      handleNavClick(link.href)
                                    }
                                  }}
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex items-center justify-between py-2 px-3 rounded text-left text-gray-200 hover:text-white hover:bg-[#383838] transition-colors"
                                >
                                  <span className="text-sm">{item.name}</span>
                                  {item.hasSubmenu && (
                                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                                  )}
                                </motion.button>
                              ))}
                            </div>
                            <motion.a
                              href={content.ctaHref}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(content.ctaHref)
                              }}
                              whileHover={{ x: 4 }}
                              className="inline-flex items-center gap-2 text-white text-sm font-semibold"
                            >
                              <span>{content.ctaText}</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="mt-4 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
