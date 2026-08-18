import Image from "next/image";

export default function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "aspect-[4/3]",
  sizes,
  priority = false,
  className = "",
  objectPosition = "object-center",
  fill: fillHeight = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  /** Stretch to the full height of the parent (e.g. a grid row with items-stretch) instead of a fixed aspect ratio. */
  fill?: boolean;
}) {
  return (
    <div className={`relative ${fillHeight ? "flex h-full flex-col" : ""} ${className}`}>
      <div
        className={`rounded-lg border border-border-hover/60 bg-cream p-2.5 shadow-[0_32px_64px_-30px_rgba(76,45,29,0.55)] sm:p-3 ${
          fillHeight ? "flex h-full flex-col" : ""
        }`}
      >
        <span className="mb-2.5 block h-[3px] w-9 shrink-0 bg-terracotta/70 sm:mb-3" aria-hidden />
        <div
          className={`group relative ${fillHeight ? "min-h-[280px] flex-1" : ratio} overflow-hidden rounded-sm bg-espresso/5`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
        </div>
      </div>
      {caption && (
        <div className="absolute -bottom-4 left-5 max-w-[calc(100%-2.5rem)] rounded-sm bg-espresso px-3.5 py-1.5 shadow-[0_10px_24px_-10px_rgba(76,45,29,0.6)] sm:left-7">
          <p className="text-[10.5px] font-medium uppercase leading-snug tracking-[0.08em] text-cream">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
