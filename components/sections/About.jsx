import { FaArrowRight, FaUser } from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell pt-16 sm:pt-20">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <article className="section-card p-7 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="icon-badge"><FaUser aria-hidden="true" /></span>
            <h2 className="text-2xl font-bold text-slate-950">About Me</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-slate-600">
            <p>
              I&apos;m a Computer Science graduate with hands-on experience in
              web and mobile applications. I enjoy turning ideas into real
              products through clean code and intuitive design.
            </p>
            <p>
              I&apos;m always eager to learn new technologies and collaborate with
              talented teams to create meaningful solutions.
            </p>
          </div>
          <a href="#contact" className="button-outline mt-7">
            More About Me <FaArrowRight aria-hidden="true" />
          </a>
        </article>

        <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-7 sm:p-8">
          <SectionHeading
            eyebrow="What I bring"
            title="Practical software skills with a product mindset."
            description="I care about reliable foundations, thoughtful interfaces, and shipping work that is useful to the people who use it."
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Responsive interfaces", "API-driven applications", "Team collaboration"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <span className="text-sm font-bold text-blue-600">0{index + 1}</span>
                <p className="mt-3 font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
