"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaCode, FaFileDownload, FaTimes } from "react-icons/fa";

import { navigationLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 20);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-md"
          : "border-slate-200/70 bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900"
        >
          <span className="text-2xl text-blue-600"><FaCode aria-hidden="true" /></span>
          John Lyndon
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navigationLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`relative py-5 text-sm font-bold transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-blue-600 after:transition-transform ${
                  activeSection === item.id
                    ? "text-blue-600 after:scale-x-100"
                    : "text-slate-700 after:scale-x-0"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            className="hidden items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:flex"
          >
            <FaFileDownload aria-hidden="true" />
            <span className="hidden lg:inline">Download Resume</span>
            <span className="lg:hidden">Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="text-2xl text-slate-700 xl:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          menuOpen ? "max-h-screen border-t bg-white" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-5">
          {navigationLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-3 text-base font-bold ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3 sm:hidden">
            <a
              href={profile.resume}
              target="_blank"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              <FaFileDownload aria-hidden="true" /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
