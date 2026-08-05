/* eslint-disable react/prop-types */
/**
 * Craft MadeBy icon set — one hand: 24×24, 1.6 stroke, round caps,
 * currentColor. Calm "workshop tool" line icons replacing the old emoji.
 */
const I = ({ children, size = 20, className = '', ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icn ${className}`}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

/* ---- craft & making ---- */
export const IconSteps = (p) => (
  <I {...p}><path d="M8.5 6h12M8.5 12h12M8.5 18h12" /><circle cx="4" cy="6" r="1.3" /><circle cx="4" cy="12" r="1.3" /><circle cx="4" cy="18" r="1.3" /></I>
);
export const IconToolbox = (p) => (
  <I {...p}><rect x="3" y="8.5" width="18" height="11" rx="2" /><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5M3 13h18M10.5 13v2.5M13.5 13v2.5" /></I>
);
export const IconReuse = (p) => (
  <I {...p}><path d="M4.5 9.5a8 8 0 0 1 13.6-2.6M19.5 14.5a8 8 0 0 1-13.6 2.6" /><path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" /></I>
);
export const IconStory = (p) => (
  <I {...p}><path d="M12 6.2C10.2 4.7 7.5 4.3 4 4.9v13.6c3.5-.6 6.2-.2 8 1.3 1.8-1.5 4.5-1.9 8-1.3V4.9c-3.5-.6-6.2-.2-8 1.3Z" /><path d="M12 6.2v13.6" /></I>
);
export const IconStopwatch = (p) => (
  <I {...p}><circle cx="12" cy="13.5" r="7" /><path d="M12 10v3.5l2.4 1.9M9.8 3.5h4.4M12 3.5v3" /></I>
);
export const IconBell = (p) => (
  <I {...p}><path d="M6.2 10.2a5.8 5.8 0 0 1 11.6 0c0 3.8 1.4 5.3 1.4 5.3H4.8s1.4-1.5 1.4-5.3Z" /><path d="M10 19a2 2 0 0 0 4 0" /></I>
);
export const IconCheckCircle = (p) => (
  <I {...p}><circle cx="12" cy="12" r="8.5" /><path d="m8.4 12.3 2.4 2.4 4.8-5.4" /></I>
);
export const IconCalendar = (p) => (
  <I {...p}><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></I>
);
export const IconCamera = (p) => (
  <I {...p}><rect x="3.5" y="7" width="17" height="12.5" rx="2.5" /><path d="M8.5 7 10 4.5h4L15.5 7" /><circle cx="12" cy="13" r="3.4" /></I>
);
export const IconFlag = (p) => (
  <I {...p}><path d="M5.5 21V4" /><path d="M5.5 4.8c4.2-1.8 8.3 1.9 13 .2v9c-4.7 1.7-8.8-2-13-.2" /></I>
);

/* ---- gifting ---- */
export const IconBow = (p) => (
  <I {...p}><circle cx="12" cy="11.5" r="1.7" /><path d="M10.4 10.6C7 7.4 3.7 8.6 4.5 11.3c.6 2.1 3.7 2 5.9 0M13.6 10.6c3.4-3.2 6.7-2 5.9.7-.6 2.1-3.7 2-5.9 0" /><path d="M10.9 13 8.6 19.5M13.1 13l2.3 6.5" /></I>
);
export const IconGift = (p) => (
  <I {...p}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M4 13.8h16M12 10v10" /><path d="M12 10C8.5 10.4 6.4 8.7 7.3 6.7 8.2 4.9 11.2 5.6 12 10ZM12 10c3.5.4 5.6-1.3 4.7-3.3-.9-1.8-3.9-1.1-4.7 3.3Z" /></I>
);
export const IconLetterHeart = (p) => (
  <I {...p}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="m3.6 7.2 8.4 5.8 8.4-5.8" /></I>
);
export const IconSparkle = (p) => (
  <I {...p}><path d="M12 4.2 13.4 8l3.8 1.4-3.8 1.4L12 14.6l-1.4-3.8L6.8 9.4 10.6 8 12 4.2Z" /><path d="m18.6 14.8.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7ZM5.9 15.9l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z" /></I>
);

/* ---- crafts marquee ---- */
export const IconYarn = (p) => (
  <I {...p}><circle cx="10.5" cy="13.5" r="6" /><path d="M6 10.7c2.7.4 5.6 1.8 7.4 4.2M5 14.7c2.2 0 4.5.9 6.2 2.7" /><path d="M13.6 8.4 21 3.5" /></I>
);
export const IconNeedle = (p) => (
  <I {...p}><path d="M19.3 4.7 9.6 14.4" /><circle cx="19" cy="5" r="1.7" /><path d="M9.6 14.4c-1.9 1.9-3.6 2.9-5.9 3.4.5-2.3 1.5-4 3.4-5.9" /></I>
);
export const IconHoop = (p) => (
  <I {...p}><circle cx="12" cy="13.2" r="7" /><circle cx="12" cy="13.2" r="4.8" /><path d="M12 3.4v2.2M10.2 4.5h3.6" /></I>
);
export const IconClay = (p) => (
  <I {...p}><path d="M7.5 4.5h9M9.3 4.5c.2 1.8-.8 2.9-2.7 3.6 1 4.2 2 7.6 3.9 10.9h3c1.9-3.3 2.9-6.7 3.9-10.9-1.9-.7-2.9-1.8-2.7-3.6" /><path d="M6.5 21h11" /></I>
);
export const IconGem = (p) => (
  <I {...p}><path d="M7.2 4.5h9.6L20.5 9 12 19.8 3.5 9l3.7-4.5Z" /><path d="M3.5 9h17M9.7 9 12 19.3 14.3 9M7.2 4.5 9.7 9l2.3-4.3L14.3 9l2.5-4.5" /></I>
);

/* ---- community & privacy ---- */
export const IconGlobe = (p) => (
  <I {...p}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17" /><path d="M12 3.5c2.7 2.7 2.7 14.3 0 17-2.7-2.7-2.7-14.3 0-17Z" /></I>
);
export const IconPeople = (p) => (
  <I {...p}><circle cx="9" cy="8.8" r="3.2" /><path d="M3.4 19.2c.8-3.2 3-4.9 5.6-4.9s4.8 1.7 5.6 4.9" /><circle cx="16.8" cy="9.4" r="2.5" /><path d="M16.4 14.3c2.2.2 3.8 1.7 4.4 4.2" /></I>
);
export const IconHome = (p) => (
  <I {...p}><path d="m4 10.4 8-6.4 8 6.4v8.1a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-8.1Z" /><path d="M9.6 20v-5.4h4.8V20" /></I>
);
export const IconLock = (p) => (
  <I {...p}><rect x="5" y="10.5" width="14" height="9.5" rx="2.2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /><circle cx="12" cy="15.2" r="1.4" /></I>
);
export const IconRings = (p) => (
  <I {...p}><circle cx="9.3" cy="12" r="5.6" /><circle cx="14.7" cy="12" r="5.6" /></I>
);
export const IconVote = (p) => (
  <I {...p}><rect x="4.5" y="4.5" width="15" height="15" rx="3" /><path d="m8.4 12.4 2.5 2.5 4.7-5.4" /></I>
);

/* ---- honors & certification ---- */
export const IconSeal = (p) => (
  <I {...p}><circle cx="12" cy="9.8" r="5.8" /><circle cx="12" cy="9.8" r="2.5" /><path d="m8.8 14.6-1.4 5.9 4.6-2.4 4.6 2.4-1.4-5.9" /></I>
);
export const IconShield = (p) => (
  <I {...p}><path d="M12 3.4 19 6v5.8c0 4.6-3 7.7-7 8.7-4-1-7-4.1-7-8.7V6l7-2.6Z" /><path d="m8.9 11.6 2.2 2.2 4-4.4" /></I>
);
export const IconMedal = (p) => (
  <I {...p}><path d="M8.3 3.5 12 9.2l3.7-5.7" /><path d="M6.5 3.5h3.6L12 6.4l1.9-2.9h3.6" /><circle cx="12" cy="14.6" r="5" /></I>
);
export const IconTrophy = (p) => (
  <I {...p}><path d="M8 4.5h8v4.6a4 4 0 0 1-8 0V4.5Z" /><path d="M8 5.5H4.6c.1 2.8 1.5 4.6 3.6 4.9M16 5.5h3.4c-.1 2.8-1.5 4.6-3.6 4.9" /><path d="M12 13.2v3M9 20h6M10.2 16.2h3.6l.7 3.8H9.5l.7-3.8Z" /></I>
);
export const IconStar = (p) => (
  <I {...p}><path d="m12 4.2 2.2 4.7 5 .7-3.7 3.5.9 5L12 15.7l-4.4 2.4.9-5L4.8 9.6l5-.7L12 4.2Z" /></I>
);
export const IconLadder = (p) => (
  <I {...p}><path d="M8.5 3v18M15.5 3v18M8.5 7.5h7M8.5 12h7M8.5 16.5h7" /></I>
);
export const IconTarget = (p) => (
  <I {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.7" /><circle cx="12" cy="12" r="1.2" /></I>
);
export const IconCompass = (p) => (
  <I {...p}><circle cx="12" cy="12" r="8.5" /><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" /></I>
);
export const IconScale = (p) => (
  <I {...p}><path d="M12 4.5V20M7.5 20h9M12 6.5 6.2 8M12 6.5l5.8 1.5" /><path d="M6.2 8 3.8 13a2.7 2.7 0 0 0 4.8 0L6.2 8ZM17.8 8l-2.4 5a2.7 2.7 0 0 0 4.8 0L17.8 8Z" /></I>
);
export const IconHourglass = (p) => (
  <I {...p}><path d="M6.8 3.5h10.4M6.8 20.5h10.4M8.3 3.5v3.3L12 12l3.7-5.2V3.5M8.3 20.5v-3.3L12 12l3.7 5.2v3.3" /></I>
);
export const IconMegaphone = (p) => (
  <I {...p}><path d="M4 10.2v3.6l3.2.6V9.6L4 10.2Z" /><path d="M7.2 9.6 19 5.2v13.6L7.2 14.4M10.2 15l.9 4.2 3.1-.6-.8-3.4" /></I>
);
export const IconLeaf = (p) => (
  <I {...p}><path d="M5 19.5C5 9.5 12 5 20 4.5c.5 8-3.5 15-13.5 15" /><path d="M5 19.5c2-5.2 5.8-9.1 10.8-11.3" /></I>
);

/* ---- platforms ---- */
export const AppleLogo = ({ size = 18, className = '', ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`icn ${className}`} aria-hidden="true" {...rest}>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.34.07 2.27.74 3.06.8 1.15-.21 2.26-.89 3.52-.84 1.51.07 2.65.62 3.4 1.57-3.14 1.87-2.39 5.98.6 7.13-.57 1.5-1.33 2.99-2.58 4.22zM12 7.34c-.12-2.49 2.02-4.58 4.38-4.74.36 2.85-2.55 5.04-4.38 4.74z" fill="currentColor" />
  </svg>
);
export const AndroidLogo = ({ size = 18, className = '', ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`icn ${className}`} aria-hidden="true" {...rest}>
    <path d="M4.8 16.8c.4-3.9 3.5-6.6 7.2-6.6s6.8 2.7 7.2 6.6H4.8Z" />
    <path d="m7.4 7.6 1.4 2M16.6 7.6l-1.4 2" />
    <circle cx="9.5" cy="14" r=".5" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="14" r=".5" fill="currentColor" stroke="none" />
  </svg>
);
export const PlayLogo = ({ size = 18, className = '', ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className={`icn ${className}`} aria-hidden="true" {...rest}>
    <path d="M3 20.5v-17a.5.5 0 0 1 .78-.41l15 8.5a.5.5 0 0 1 0 .82l-15 8.5A.5.5 0 0 1 3 20.5z" />
  </svg>
);
