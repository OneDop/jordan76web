import React, { useEffect, useRef, useState } from 'react';

/* Shared J76 primitives — dependency-free versions of
   reactbits / aceternity / uiverse / motion.dev patterns. */

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li';
}> = ({ children, delay = 0, className = '', as = 'div' }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      className={`j76-reveal${inView ? ' is-in' : ''} ${className}`}
      style={{ ['--d' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/* ReactBits-style split text — staggered char entrance, one shot */
export const SplitTitle: React.FC<{ text: string; accentLast?: boolean; className?: string }> = ({
  text,
  accentLast = false,
  className = '',
}) => {
  const words = text.split(' ');
  let ci = 0;
  const lastIdx = words.length - 1;
  return (
    <span className={`j76-split ${className}`} aria-label={text}>
      {words.map((w, wi) => {
        const isAccent = accentLast && wi === lastIdx;
        const chars = w.split('').map((c) => {
          const idx = ci++;
          return (
            <span key={idx} className="ch" style={{ ['--i' as string]: idx }} aria-hidden="true">
              {c}
            </span>
          );
        });
        return (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {isAccent ? <span className="cy">{chars}</span> : chars}
            {wi < lastIdx ? <span aria-hidden="true"> </span> : null}
          </span>
        );
      })}
    </span>
  );
};

/* ReactBits CountUp — eases when scrolled into view */
export const CountUp: React.FC<{ to: number; suffix?: string; duration?: number }> = ({
  to,
  suffix = '',
  duration = 1400,
}) => {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

/* Aceternity-style spotlight — tracks cursor via CSS vars */
export function attachSpotlight(el: HTMLElement | null) {
  if (!el) return;
  const move = (e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  el.addEventListener('pointermove', move);
}

export const Spotlight: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    el.addEventListener('pointermove', move);
    return () => el.removeEventListener('pointermove', move);
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

/* ReactBits tilt — subtle pointer tilt, desktop + fine pointer only */
export const Tilt: React.FC<{ children: React.ReactNode; className?: string; max?: number }> = ({
  children,
  className = '',
  max = 7,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${px * max}deg`);
      el.style.setProperty('--rx', `${-py * max}deg`);
    };
    const leave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [max]);
  return (
    <div ref={ref} className={`j76-tilt ${className}`}>
      {children}
    </div>
  );
};

/* Uiverse magnet button — gentle pull toward cursor */
export const Magnet: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.12}px, ${dy * 0.12}px)`;
    };
    const leave = () => {
      el.style.transform = '';
    };
    const parent = el.parentElement;
    (parent ?? el).addEventListener('pointermove', move);
    (parent ?? el).addEventListener('pointerleave', leave);
    return () => {
      (parent ?? el).removeEventListener('pointermove', move);
      (parent ?? el).removeEventListener('pointerleave', leave);
    };
  }, []);
  return React.cloneElement(children, {
    ref,
  } as Record<string, unknown>);
};

export const Marquee: React.FC<{ items: string[] }> = ({ items }) => {
  const doubled = [...items, ...items];
  return (
    <div className="j76-marquee" aria-hidden="true">
      <div className="j76-marquee-track">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export const SectionHead: React.FC<{ title: React.ReactNode; note?: string }> = ({
  title,
  note,
}) => (
  <div className="j76-sect-head">
    <h2 className="j76-sect-title">{title}</h2>
    {note ? <span className="j76-sect-note">{note}</span> : null}
  </div>
);
