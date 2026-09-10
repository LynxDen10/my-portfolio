"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const previewStyles = {
  mobile: {
    accent: "from-emerald-400 to-cyan-500",
    label: "AcciAlert",
    sideLabel: "Live route monitoring",
  },
  dashboard: {
    accent: "from-blue-500 to-indigo-600",
    label: "Barangay Portal",
    sideLabel: "Community dashboard",
  },
  billing: {
    accent: "from-violet-500 to-blue-600",
    label: "Billing Portal",
    sideLabel: "Payment overview",
  },
};

export default function ProjectPreview({ variant, images = [] }) {
  const [activeImage, setActiveImage] = useState(null);
  const preview = previewStyles[variant] ?? previewStyles.dashboard;
  const currentImage = activeImage === null ? null : images[activeImage];

  useEffect(() => {
    if (activeImage === null || images.length === 0) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, images.length]);

  const showPrevious = () => {
    setActiveImage((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveImage((index) => (index + 1) % images.length);
  };

  const slideshow = currentImage ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshots"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
      onClick={() => setActiveImage(null)}
    >
      <button
        type="button"
        aria-label="Close screenshots"
        autoFocus
        onClick={() => setActiveImage(null)}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-xl text-white transition hover:bg-white/20"
      >
        <FaTimes aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
        className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-8"
      >
        <FaChevronLeft aria-hidden="true" />
      </button>

      <div
        className="relative h-[75vh] w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-950/75 px-3 py-1 text-center text-xs font-medium text-white">
          {activeImage + 1} / {images.length}
        </p>
      </div>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
        className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-8"
      >
        <FaChevronRight aria-hidden="true" />
      </button>
    </div>
  ) : null;

  return (
    <div
      aria-hidden={variant !== "image"}
      className="relative h-full min-h-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-inner"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${preview.accent}`}
      />
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[9px] font-medium text-slate-400">
          {preview.label}
        </span>
      </div>

      {variant === "image" ? (
        <div className="mt-4 space-y-2">
          <button
            type="button"
            aria-label="Open project screenshots"
            onClick={() => setActiveImage(0)}
            className="group relative block h-32 w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-800 text-left sm:h-36"
          >
            <Image
              src={images[0]?.src}
              alt={images[0]?.alt ?? "Project preview"}
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover object-top transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 text-xs font-bold text-white opacity-0 transition group-hover:bg-slate-950/35 group-hover:opacity-100">
              View screenshots
            </span>
          </button>
          <div className="grid grid-cols-3 gap-2">
            {images.slice(1, 4).map(({ src, alt }) => (
              <button
                type="button"
                key={src}
                aria-label={`View ${alt}`}
                onClick={() =>
                  setActiveImage(images.findIndex((image) => image.src === src))
                }
                className="group relative h-10 overflow-hidden rounded border border-slate-700 bg-slate-800"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 10vw, 33vw"
                  className="object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      ) : variant === "mobile" ? (
        <div className="mx-auto mt-4 w-24 rounded-[1.35rem] border-4 border-slate-700 bg-slate-900 p-1.5 shadow-2xl">
          <div
            className={`rounded-xl bg-gradient-to-b ${preview.accent} px-2 py-3`}
          >
            <div className="mx-auto h-1 w-8 rounded-full bg-slate-900/70" />
            <div className="mt-4 rounded-lg bg-slate-950/70 p-2">
              <div className="h-8 rounded bg-emerald-400/30" />
              <div className="mt-2 h-1.5 w-10 rounded bg-white/70" />
              <div className="mt-1 h-1.5 w-7 rounded bg-white/40" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              <span className="h-5 rounded bg-white/25" />
              <span className="h-5 rounded bg-white/25" />
              <span className="h-5 rounded bg-white/25" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-[3.5rem_1fr] gap-3">
          <div className="rounded-lg bg-slate-800 p-2">
            <div className="h-2 w-6 rounded bg-slate-600" />
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-1.5 rounded bg-slate-700" />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-1.5 h-1.5 w-12 rounded bg-slate-600" />
              </div>
              <div
                className={`h-5 w-11 rounded bg-gradient-to-r ${preview.accent}`}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg bg-slate-800 p-2">
                  <div className="h-1.5 w-7 rounded bg-slate-600" />
                  <div className="mt-2 h-3 w-9 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-slate-800 p-3">
              <div className="flex h-12 items-end gap-1.5">
                {[30, 55, 38, 76, 50, 88, 65].map((height, index) => (
                  <span
                    key={height}
                    className={`flex-1 rounded-t bg-gradient-to-t ${preview.accent}`}
                    style={{ height: `${height}%`, opacity: 0.45 + index / 14 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="absolute bottom-3 left-3 text-[10px] font-medium text-slate-500">
        {preview.sideLabel}
      </span>

      {typeof document !== "undefined" && slideshow
        ? createPortal(slideshow, document.body)
        : null}
    </div>
  );
}
