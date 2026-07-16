import { FaAward } from "react-icons/fa";

import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Growth"
          title="Certifications & Learning"
          description="Professional recognitions, awards, and certifications that reflect my continuous learning and commitment to software development."
          inverse
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <article
              key={certification.title}
              className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/20"
            >
              {/* Certificate */}
              {certification.image ? (
                <a
                  href={certification.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-slate-800 p-5"
                >
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="mx-auto max-h-[450px] w-auto rounded-lg border border-slate-700 shadow-lg transition duration-300 hover:scale-[1.02]"
                  />
                </a>
              ) : (
                <div className="flex h-72 items-center justify-center bg-slate-800">
                  <FaAward className="text-7xl text-blue-400" />
                </div>
              )}

              {/* Information */}
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <FaAward size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {certification.title}
                      </h3>

                      {certification.issuer && (
                        <p className="text-blue-400">{certification.issuer}</p>
                      )}
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {certification.date && (
                  <p className="mt-4 text-sm text-slate-400">
                    📅 {certification.date}
                  </p>
                )}

                <p className="mt-5 leading-8 text-slate-300">
                  {certification.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
