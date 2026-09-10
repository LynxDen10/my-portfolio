"use client";

import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { navigationLinks, profile } from "@/data/portfolio";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{profile.name}</h2>
            <p className="leading-7 text-slate-300">
              Computer Science graduate passionate about building modern web
              applications using React, Next.js, Node.js, Firebase, MySQL,
              Tailwind CSS, and other modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-300 transition hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Contact</h3>
            <div className="space-y-4 text-slate-300">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaEnvelope className="shrink-0 text-blue-400" />
                {profile.email}
              </a>
              <a
                href="tel:+639817976666"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaPhoneAlt className="shrink-0 text-blue-400" />
                {profile.phone}
              </a>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-blue-400" />
                {profile.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">Connect</h3>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook profile"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="rounded-full bg-blue-600 p-3 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
