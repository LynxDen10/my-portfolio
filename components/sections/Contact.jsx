import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+639817976666",
    icon: FaPhoneAlt,
  },
  {
    label: "Location",
    value: profile.location,
    href: "#contact",
    icon: FaMapMarkerAlt,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="contact-panel">
        <div className="max-w-2xl">
          <span className="icon-badge">
            <FaPaperPlane aria-hidden="true" />
          </span>
          <div className="mt-5">
            <SectionHeading
              eyebrow="Let's connect"
              title="Let's work together."
              description="I'm open to opportunities and collaborations. Feel free to reach out through any of the channels below."
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} className="contact-item">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                  {label}
                </span>
                <span className="mt-1 block font-semibold text-slate-800">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
