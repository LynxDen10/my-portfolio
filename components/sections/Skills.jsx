import { FaCode } from "react-icons/fa";

import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell pb-12 pt-8 sm:pb-16">
      <div className="section-card p-7 sm:p-8">
        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="icon-badge">
            <FaCode aria-hidden="true" />
          </span>

          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Technical Skills
            </h2>

            <p className="mt-2 max-w-2xl text-slate-500">
              A collection of technologies and tools I use to design, develop,
              and deploy modern web and mobile applications.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="border-b-2 border-blue-500 pb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
