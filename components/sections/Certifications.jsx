import { FaAward } from "react-icons/fa";

import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Growth"
          title="Certifications & learning"
          description="A dedicated place to share your credentials and the skills you continue to develop."
          inverse
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <article key={certification.title} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-300">
                <FaAward aria-hidden="true" />
              </span>
              <span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{certification.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{certification.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
