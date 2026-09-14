import Image from "next/image";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-full bg-linear-to-br from-blue-400 via-blue-600 to-cyan-300 opacity-90 blur-sm" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-slate-100 bg-slate-200 sm:h-52 sm:w-52">
              <Image
                src="/images/profile/profile.jpg"
                alt="John Lyndon R. Sanggod"
                fill
                priority
                sizes="(min-width: 640px) 240px, 192px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Junior Software Developer / Application Developer · Bohol,
              Philippines
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.98] tracking-tight text-white xl:text-[4.25rem]">
              <span className="whitespace-nowrap">John Lyndon R.</span>
              <span className="block text-blue-500">Sanggod</span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-slate-100">
              {profile.role}
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
              Computer Science graduate passionate about building modern,
              scalable, and user-friendly applications that solve real-world
              problems.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="button-primary">
                View My Work <FaArrowRight aria-hidden="true" />
              </a>
              <a href="#contact" className="button-secondary">
                <FaEnvelope aria-hidden="true" /> Contact Me
              </a>
            </div>

            <div className="mt-7 flex justify-center gap-3 lg:justify-start">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="social-link-dark"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="social-link-dark"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="social-link-dark"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="code-window mx-auto w-full max-w-xl">
          <div className="flex items-center gap-2 border-b border-slate-700/80 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs font-medium text-slate-500">
              developer.js
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 text-sm leading-7 sm:px-7 sm:py-6 sm:text-base">
            <code>
              <span className="code-line">
                <span className="code-number">1</span>
                <span className="code-keyword">const</span> developer = {"{"}
              </span>
              <span className="code-line">
                <span className="code-number">2</span> name:{" "}
                <span className="code-string">
                  &quot;John Lyndon R. Sanggod&quot;
                </span>
                ,
              </span>
              <span className="code-line">
                <span className="code-number">3</span> role:{" "}
                <span className="code-string">
                  &quot;Software Developer / Application Developer&quot;
                </span>
                ,
              </span>
              <span className="code-line">
                <span className="code-number">4</span> skills: [
                <span className="code-string">&quot;JavaScript&quot;</span>,{" "}
                <span className="code-string">&quot;React&quot;</span>,{" "}
                <span className="code-string">&quot;Node.js&quot;</span>,
              </span>
              <span className="code-line">
                <span className="code-number">5</span>{" "}
                <span className="code-string">&quot;Next.js&quot;</span>,{" "}
                <span className="code-string">&quot;Firebase&quot;</span>,{" "}
                <span className="code-string">&quot;MySQL&quot;</span>],
              </span>
              <span className="code-line">
                <span className="code-number">6</span> passion:{" "}
                <span className="code-string">
                  &quot;Building solutions that
                </span>
              </span>
              <span className="code-line">
                <span className="code-number">7</span>{" "}
                <span className="code-string">make an impact.&quot;</span>
              </span>
              <span className="code-line">
                <span className="code-number">8</span>
                {"}"};
              </span>
              <span className="code-line mt-3">
                <span className="code-number">9</span>
                <span className="code-console">console</span>.log(developer);
              </span>
              <span className="code-line mt-3 text-slate-400">
                <span className="code-number">10</span>
                {"// Let’s build something amazing together! 🚀"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
