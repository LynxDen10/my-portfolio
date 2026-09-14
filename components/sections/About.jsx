import { FaArrowRight, FaUser } from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell pt-16 sm:pt-20">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Left Card */}
        <article className="section-card p-7 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="icon-badge">
              <FaUser aria-hidden="true" />
            </span>

            <h2 className="text-2xl font-bold text-slate-950">About Me</h2>
          </div>

          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              I&apos;m a Computer Science graduate and Junior Software Developer
              / Application Developer focused on creating practical web and
              mobile applications that solve real user problems through clean
              architecture, strong product thinking, and intuitive design.
            </p>

            <p>
              I build with modern tools, improve through real-world project
              work, and enjoy turning ideas into dependable software that can be
              tested, maintained, and used with confidence.
            </p>
          </div>

          <a href="#contact" className="button-outline mt-7">
            Let&apos;s Connect
            <FaArrowRight aria-hidden="true" />
          </a>
        </article>

        {/* Right Card */}
        <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-7 sm:p-8">
          <SectionHeading
            eyebrow="Core Expertise"
            title="Building scalable software with clean code and user-centered design."
            description="I develop responsive web and mobile applications with a focus on performance, usability, and maintainable software architecture."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">01</span>

              <h3 className="mt-3 font-semibold text-slate-900">
                Full-Stack Development
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                React, Next.js, Node.js
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">02</span>

              <h3 className="mt-3 font-semibold text-slate-900">
                Mobile Development
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Android, Kotlin, Firebase
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">03</span>

              <h3 className="mt-3 font-semibold text-slate-900">
                Junior Software Developer
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Problem Solving, Git, Agile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
