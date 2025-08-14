"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { label: "Job List", href: "/jobs" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-gray-600",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button variant="default" className="bg-primary hover:bg-primary/90">
        Become a Client
      </Button>
    </div>
  )
}
