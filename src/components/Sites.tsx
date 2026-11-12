import {
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";
import { useLanguage } from "../hooks/useLanguage";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { SiteItem } from "../content/i18n";
import avellen from "../assets/projects/avellen.jpg";
import cabeloliso from "../assets/projects/cabeloliso.jpg";
import castherm from "../assets/projects/castherm.jpg";
import anacarolinatrama from "../assets/projects/anacarolinatrama.jpg";
import viny from "../assets/projects/viny.webp";

const screenshots: Record<SiteItem["slug"], string> = {
  avellen,
  cabeloliso,
  castherm,
  anacarolinatrama,
  viny,
};

export default function Sites() {
  const { content, lang } = useLanguage();
  const { sites } = content;
  const isCarousel = sites.items.length >= 4;
  const reducedMotion = useReducedMotion();
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [carouselState, setCarouselState] = useState({
    index: 0,
    canPrevious: false,
    canNext: sites.items.length >= 4,
  });

  const updateCarouselState = useCallback((target?: HTMLDivElement) => {
    const track = target ?? (document.getElementById("sites-carousel") as HTMLDivElement | null);
    if (!track) return;

    const firstSlide = track.querySelector<HTMLElement>(".cy-site-slide");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = (firstSlide?.getBoundingClientRect().width ?? 1) + gap;
    const index = Math.min(
      sites.items.length - 1,
      Math.max(0, Math.round(track.scrollLeft / step)),
    );
    const canPrevious = track.scrollLeft > 2;
    const canNext = track.scrollLeft + track.clientWidth < track.scrollWidth - 2;

    setCarouselState((current) =>
      current.index === index &&
      current.canPrevious === canPrevious &&
      current.canNext === canNext
        ? current
        : { index, canPrevious, canNext },
    );
  }, [sites.items.length]);

  useEffect(() => {
    if (!isCarousel) return;

    updateCarouselState();
    const handleResize = () => updateCarouselState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isCarousel, updateCarouselState]);

  const moveCarousel = (direction: -1 | 1) => {
    const track = document.getElementById("sites-carousel") as HTMLDivElement | null;
    const firstSlide = track?.querySelector<HTMLElement>(".cy-site-slide");
    if (!track || !firstSlide) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstSlide.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      !isCarousel ||
      (event.pointerType !== "mouse" && event.pointerType !== "pen") ||
      event.button !== 0
    ) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
    suppressClickRef.current = false;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(distance) < 6) return;

    if (!drag.moved) {
      drag.moved = true;
      suppressClickRef.current = true;
      setIsDragging(true);
      window.getSelection()?.removeAllRanges();
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    event.currentTarget.scrollLeft = drag.startScrollLeft - distance;
  };

  const finishPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;
    if (drag.moved) setIsDragging(false);
  };

  const cancelPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;

    dragRef.current = null;
    suppressClickRef.current = false;
    setIsDragging(false);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <section
      id="sites"
      className="relative z-10 mx-auto max-w-cyber px-[26px] pb-[clamp(54px,8vw,100px)] pt-[clamp(20px,3vw,40px)]"
    >
      <div className="mb-4 flex flex-wrap items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
          {sites.kicker}
        </span>
        <h2 className="cy-section-title text-[clamp(30px,5vw,64px)]">
          <ScrambleText text={sites.heading} />
        </h2>
      </div>
      <p className={`max-w-[62ch] text-sm leading-[1.6] text-cyber-text/65 ${isCarousel ? "mb-4" : "mb-[34px]"}`}>
        {sites.lead}
      </p>

      {isCarousel && (
        <div className="cy-sites-controls">
          <span className="cy-sites-position" aria-hidden="true">
            {String(carouselState.index + 1).padStart(2, "0")} / {String(sites.items.length).padStart(2, "0")}
          </span>
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {lang === "pt"
              ? `Site ${carouselState.index + 1} de ${sites.items.length}`
              : `Site ${carouselState.index + 1} of ${sites.items.length}`}
          </span>
          <button
            type="button"
            className="cy-sites-control"
            aria-label={sites.previous}
            disabled={!carouselState.canPrevious}
            onClick={() => moveCarousel(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="cy-sites-control"
            aria-label={sites.next}
            disabled={!carouselState.canNext}
            onClick={() => moveCarousel(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      <Reveal
        id={isCarousel ? "sites-carousel" : undefined}
        className={[
          "cy-sites-grid",
          isCarousel && "cy-sites-grid--carousel",
          isDragging && "is-dragging",
        ]
          .filter(Boolean)
          .join(" ")}
        role={isCarousel ? "region" : undefined}
        aria-label={isCarousel ? sites.carouselLabel : undefined}
        aria-roledescription={
          isCarousel ? (lang === "pt" ? "carrossel" : "carousel") : undefined
        }
        tabIndex={isCarousel ? 0 : undefined}
        onScroll={
          isCarousel
            ? (event) => updateCarouselState(event.currentTarget)
            : undefined
        }
        onPointerDown={isCarousel ? handlePointerDown : undefined}
        onPointerMove={isCarousel ? handlePointerMove : undefined}
        onPointerUp={isCarousel ? finishPointerDrag : undefined}
        onPointerCancel={isCarousel ? cancelPointerDrag : undefined}
        onClickCapture={isCarousel ? handleClickCapture : undefined}
        onDragStart={isCarousel ? (event) => event.preventDefault() : undefined}
      >
        {sites.items.map((site, index) => (
          <div
            key={site.slug}
            className="cy-site-slide"
            role={isCarousel ? "group" : undefined}
            aria-label={
              isCarousel
                ? lang === "pt"
                  ? `Site ${index + 1} de ${sites.items.length}`
                  : `Site ${index + 1} of ${sites.items.length}`
                : undefined
            }
          >
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="cy-site-card"
              aria-label={`${sites.visit}: ${site.name} (${site.domain})`}
            >
              <div className="cy-site-browser" aria-hidden="true">
                <span className="cy-site-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="cy-site-url">{site.domain}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-cyber-cyan/70">
                  {site.no}
                </span>
              </div>

              <div
                className={`cy-site-shot${site.imageTreatment === "artwork" ? " cy-site-shot--artwork" : ""}`}
              >
                <img
                  src={screenshots[site.slug]}
                  alt={
                    site.imageTreatment === "artwork"
                      ? lang === "pt"
                        ? "Colagem visual do portfólio de Viny, entre Minas Gerais e São Paulo"
                        : "Viny portfolio artwork connecting Minas Gerais and São Paulo"
                      : lang === "pt"
                        ? `Prévia do site: ${site.name}`
                        : `Website preview: ${site.name}`
                  }
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>

              <div className="cy-site-body">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyber-cyan/75">
                  {site.category}
                </div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="font-display text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.08] text-cyber-strong">
                    {site.name}
                  </h3>
                  <span className="cy-card-arrow mt-1 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-cyber-text/60">
                    {sites.visit} ↗
                  </span>
                </div>
                <p className="mt-3 text-sm leading-[1.5] text-cyber-text/65">
                  {site.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-[7px]">
                  {site.tags.map((tag) => (
                    <span key={tag} className="cy-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
