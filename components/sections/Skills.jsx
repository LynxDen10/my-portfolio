import { FaCode } from "react-icons/fa";

import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell pb-12 pt-8 sm:pb-16">
      <div className="section-card p-7 sm:p-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="icon-badge"><FaCode aria-hidden="true" /></span>
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Skills</h2>
            <p className="mt-1 text-sm text-slate-500">Technologies I use to bring ideas to life.</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b-2 border-blue-400 pb-2 text-sm font-bold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
