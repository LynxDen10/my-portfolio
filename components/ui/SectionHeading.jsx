export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  const titleClass = inverse ? "text-white" : "text-slate-950";
  const descriptionClass = inverse ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
