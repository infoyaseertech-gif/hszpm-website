"use client";

import { useEffect, useState } from "react";
import ImagePlaceholder from "@/components/UI/ImagePlaceholder";

export default function GalleryGrid({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, photos.length]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group text-left"
            aria-label={`Enlarge photo: ${photo.caption}`}
          >
            <ImagePlaceholder
              seed={photo.id}
              label={photo.caption}
              className="transition-transform duration-150 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ImagePlaceholder
              seed={photos[activeIndex].id}
              label={photos[activeIndex].caption}
              ratio="aspect-[4/3]"
            />
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-11 right-0 text-white/80 hover:text-white text-sm"
              aria-label="Close"
            >
              Close ✕
            </button>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
                }
                className="text-white/80 hover:text-white text-sm"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i + 1) % photos.length)}
                className="text-white/80 hover:text-white text-sm"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
