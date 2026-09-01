import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './FlowingMenu.css';

import aiTrackImg from '../assets/ai_track.png';
import softwareTrackImg from '../assets/software_engineering_track.png';
import emergingTrackImg from '../assets/emerging_tech_track.png';
import innovationTrackImg from '../assets/innovation_track.png';
import leadershipTrackImg from '../assets/leadership_track.png';

export interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

export interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const DEFAULT_ITEMS: MenuItemProps[] = [
  {
    text: 'Artificial Intelligence',
    link: '#speakers',
    image: aiTrackImg,
  },
  {
    text: 'Software Engineering',
    link: '#speakers',
    image: softwareTrackImg,
  },
  {
    text: 'Emerging Technologies',
    link: '#speakers',
    image: emergingTrackImg,
  },
  {
    text: 'Innovation & Entrepreneurship',
    link: '#speakers',
    image: innovationTrackImg,
  },
  {
    text: 'Leadership',
    link: '#speakers',
    image: leadershipTrackImg,
  },
];

export const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section className="flowing-menu-section" id="congress-tracks">
      <div className="flowing-menu-container">
        <div className="flowing-menu-nav-wrap">
          <nav className="menu">
            {items.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemEl = itemRef.current;
    const marqueeEl = marqueeRef.current;
    const marqueeInnerEl = marqueeInnerRef.current;

    if (!itemEl || !marqueeEl || !marqueeInnerEl) return;

    const findClosestEdge = (ev: MouseEvent): 'top' | 'bottom' => {
      const rect = itemEl.getBoundingClientRect();
      const mouseRelY = ev.clientY - rect.top;
      return mouseRelY < rect.height / 2 ? 'top' : 'bottom';
    };

    const handleMouseEnter = (ev: MouseEvent) => {
      const edge = findClosestEdge(ev);

      gsap
        .timeline({ defaults: { duration: 0.45, ease: 'power3.out' } })
        .set(marqueeEl, { y: edge === 'top' ? '-101%' : '101%' })
        .set(marqueeInnerEl, { y: edge === 'top' ? '101%' : '-101%' })
        .to([marqueeEl, marqueeInnerEl], { y: '0%' });
    };

    const handleMouseLeave = (ev: MouseEvent) => {
      const edge = findClosestEdge(ev);

      gsap
        .timeline({ defaults: { duration: 0.45, ease: 'power3.out' } })
        .to(marqueeEl, { y: edge === 'top' ? '-101%' : '101%' })
        .to(marqueeInnerEl, { y: edge === 'top' ? '101%' : '-101%' });
    };

    itemEl.addEventListener('mouseenter', handleMouseEnter);
    itemEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      itemEl.removeEventListener('mouseenter', handleMouseEnter);
      itemEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const repeats = Array(6).fill(text);

  return (
    <div className="menu__item" ref={itemRef}>
      <a className="menu__item-link" href={link}>
        <span className="menu__item-text">{text}</span>
      </a>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeats.map((repText, idx) => (
              <React.Fragment key={idx}>
                <span className="marquee__text">{repText}</span>
                <div
                  className="menu__item-img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
