import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const navItems = [
    { label: "Job List", href: "/job-listings" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <Image src="/logo-white.svg" alt="LotusLynx Logo" width={160} height={50} className="h-12 w-auto" />
        </div>

        <nav className="flex justify-center gap-8 mb-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-gray-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <Link href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-500 transition" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-red-500 transition" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500 transition" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-300">
          <p>Copyright © 2025 Lotus Lynx. All rights reserved. Privacy Policy.</p>
          <p>All rights reserved. Privacy Policy.</p>
        </div>
      </div>
    </footer>
  );
}
