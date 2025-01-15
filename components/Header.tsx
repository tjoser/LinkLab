'use client';

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "Talent", href: "/talent" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white dark:bg-gray-800"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </NavbarMenuToggle>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            {/* Replace the SVG logo with the Image */}
            <Image
              src="/assets/logo.png" // Path to your logo file
              alt="LinkLab Logo"
              width={36} // Adjust width
              height={36} // Adjust height
              priority={true} // Ensures the logo loads quickly
            />
            <p className="font-bold text-gray-900 dark:text-white ml-2">LinkLab</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/assets/logo.png" // Path to your logo file
              alt="LinkLab Logo"
              width={36} // Adjust width
              height={36} // Adjust height
              priority={true} // Ensures the logo loads quickly
            />
            <p className="font-bold text-gray-900 dark:text-white ml-2">LinkLab</p>
          </Link>
        </NavbarBrand>
        {menuItems.slice(1, 4).map((item) => (
          <NavbarItem key={item.href}>
            <Link className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className="w-full text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
