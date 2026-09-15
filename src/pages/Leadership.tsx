import { useState, useEffect, useRef } from 'react';

type BoardView = 'default' | 'upper' | 'lower';

const DESIGN_W = 1440;
const DESIGN_H = 900;

interface Member {
  id: number;
  name: string;
  portrait: string;
  interest: string;
}

const TOP_LEADERSHIP: Member[] = [
  { id: 1, name: "HONG YI YANG", portrait: "/p/hongyi.jpg", interest: "/i/filler.png" },
  { id: 2, name: "DEVON SUKDHEO", portrait: "/p/DEVON.jpg", interest: "/i/filler.png" },
  { id: 3, name: "KARYNA", portrait: "/p/KARYNA.jpg", interest: "/i/filler.png" },
  { id: 4, name: "VIVIAN", portrait: "/p/filler.jpg", interest: "/i/filler.png" },
];

const LOWER_BOARD: Member[] = [
  { id: 5, name: "IVAN", portrait: "/p/IVAN.jpg", interest: "/i/filler.png" },
  { id: 6, name: "TOBEY NGUYEN", portrait: "/p/TOBEY.jpg", interest: "/i/filler.png" },
  { id: 7, name: "LORENZO SICAT", portrait: "/p/lorenzo.jpg", interest: "/i/filler.png" },
  { id: 8, name: "ISHRAQ MAHMUD", portrait: "/p/ishraq.jpg", interest: "/i/filler.png" },
  { id: 9, name: "KRIS", portrait: "/p/kris.jpg", interest: "/i/filler.png" },
  { id: 10, name: "SELENA", portrait: "/p/selena.jpg", interest: "/i/filler.png" },
  { id: 11, name: "YOSHITA", portrait: "/p/YOSHITA.jpg", interest: "/i/filler.png" },
  { id: 12, name: "ALINA", portrait: "/p/ALINA.jpg", interest: "/i/filler.png" },
];

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-30 left-35 z-20 w-9 h-9 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/20 flex items-center justify-center text-white transition-all"
      aria-label="Back"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </button>
  );
}

function PopupCard({ member, isSmall, isOpen }: { member: Member; isSmall?: boolean; isOpen?: boolean }) {
  return (
    <div className={`
      absolute z-[500] bottom-full left-1/2 -translate-x-1/2 mb-2
      ${isSmall ? 'w-32' : 'w-44'} p-1 bg-white shadow-[6px_6px_0px_#000] border-2 border-black
      -skew-x-6 transition-all duration-300 pointer-events-none
      ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
    `}>
      <div className="bg-black p-2">
        <div className="relative aspect-[3/4] bg-zinc-900 border border-white overflow-hidden">
          <img src={member.portrait} alt={member.name} className="w-full h-full object-cover" />
          <div className={`${isSmall ? 'w-7 h-7' : 'w-10 h-10'} absolute bottom-1 right-1 bg-white p-1 border border-black rotate-12`}>
            <img src={member.interest} alt="interest" className="w-full h-full object-contain" />
          </div>
        </div>
        <p className="mt-1 text-[7px] font-black uppercase text-white text-center tracking-tighter">
          {member.name}
        </p>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const [view, setView] = useState<BoardView>('default');
  const [activeId, setActiveId] = useState<number | null>(null);
  const frameRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  // Touch devices have no hover, so tapping a member toggles the popup
  // instead. Any navigation clears whichever popup was pinned open.
  const changeView = (v: BoardView) => { setView(v); setActiveId(null); };
  const toggleActive = (id: number) => setActiveId(prev => (prev === id ? null : id));

  // Fit the fixed design canvas inside the available space, keeping aspect
  // ratio. One uniform scale keeps branches, popups and text in proportion.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / DESIGN_W, height / DESIGN_H));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      ref={frameRef}
      className="w-full h-screen bg-white overflow-hidden flex items-center justify-center select-none"
    >
      <div
        className="relative shrink-0"
        style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }}
      >
        <img
          src="/background/SASE design new.png"
          alt="SASE Leadership"
          className="w-full h-full"
          draggable={false}
        />

        {/* ── Blue screen overlay ── */}
        <div
          className="absolute"
          style={{ left: '22%', top: '11%', width: '54%', height: '72%' }}
        >
          {/* Circular back arrow — top-left of blue area, visible in upper/lower views */}
          {view !== 'default' && <BackButton onClick={() => changeView('default')} />}

          {/* Content area below the drawn status bar (~16% of blue height) */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ marginTop: '16%', height: '84%' }}
          >
            {/* DEFAULT */}
            {view === 'default' && (
              <div className="flex flex-col items-center gap-5">
                <button
                  onClick={() => changeView('upper')}
                  className="relative px-10 py-4 bg-white font-black text-xl uppercase tracking-widest border-4 border-white -skew-x-6 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all group overflow-hidden"
                  style={{ color: '#026CB1' }}
                >
                  <span className="inline-block skew-x-6 relative z-10">Upper Board</span>
                  <span className="absolute inset-0 bg-sase-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="absolute inset-0 skew-x-6 flex items-center justify-center text-white font-black text-xl uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Upper Board</span>
                </button>
                <button
                  onClick={() => changeView('lower')}
                  className="px-10 py-4 bg-transparent font-black text-xl uppercase tracking-widest border-4 border-white -skew-x-6 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all"
                  style={{ color: 'white' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#026CB1'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
                >
                  <span className="inline-block skew-x-6">Lower Board</span>
                </button>
              </div>
            )}

            {/* UPPER BOARD */}
            {view === 'upper' && (
              <div className="flex flex-col items-center gap-4">
                {TOP_LEADERSHIP.map((m) => (
                  <div
                    key={m.id}
                    className={`group relative flex items-center w-fit ${activeId === m.id ? 'z-[9999]' : 'hover:z-[9999]'}`}
                    onClick={() => toggleActive(m.id)}
                  >
                    <h2
                      className={`font-black uppercase transition-colors whitespace-nowrap cursor-pointer ${activeId === m.id ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}
                      style={{
                        fontSize: '46px',
                        letterSpacing: '-0.02em',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
                        fontStyle: 'italic',
                        transform: 'skewX(-6deg)',
                        display: 'inline-block',
                      }}
                    >
                      {m.name}
                    </h2>
                    <PopupCard member={m} isOpen={activeId === m.id} />
                  </div>
                ))}
              </div>
            )}

            {/* LOWER BOARD — phone screen */}
            {view === 'lower' && (
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="/background/SASE Logo.png"
                  alt="SASE Logo"
                  className="w-28 h-28 object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]"
                />
                <p
                  className="font-black uppercase text-white text-center"
                  style={{
                    fontSize: '31px',
                    letterSpacing: '0.15em',
                    fontStyle: 'italic',
                    textShadow: '0 0 16px rgba(255,255,255,1), 0 0 32px rgba(150,220,255,0.8), 0 0 60px rgba(100,180,255,0.5)',
                  }}
                >
                  Members<br />
                  <span style={{ fontSize: '1.4em' }}>
                    Loading<span className="animate-pulse">...</span>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Lower board radial ── */}
        {/* Center aligns with the logo: x=49% matches blue screen center, y=52% accounts for status bar offset */}
        {view === 'lower' && (
          <div
            className="absolute"
            style={{ left: '49.3%', top: '47%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-0 h-0">
              {LOWER_BOARD.map((m, i, arr) => {
                const angle = (i / arr.length) * 360;
                return (
                  // Outer div handles rotation only — never touched by animation
                  <div
                    key={m.id}
                    className={`absolute group origin-left ${activeId === m.id ? 'z-[9999]' : 'hover:z-[9999]'}`}
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Inner div handles fade-in only — no transform here */}
                    <div
                      style={{
                        opacity: 0,
                        animation: 'fadeInMember 0.4s ease forwards',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className="flex items-center" style={{ width: '340px' }}>
                        <div className={`flex-grow ml-[35%] h-[2px] transition-all duration-300 ${activeId === m.id ? 'bg-cyan-700' : 'bg-black group-hover:bg-cyan-700'}`} />
                        <div
                          style={{ transform: `rotate(-${angle}deg)` }}
                          className={`relative shrink-0 flex items-center transition-transform cursor-pointer ${activeId === m.id ? 'scale-105' : 'hover:scale-105'}`}
                          onClick={() => toggleActive(m.id)}
                        >
                          <PopupCard member={m} isSmall isOpen={activeId === m.id} />
                          <span className={`text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2 border-l-2 whitespace-nowrap min-w-[145px] shadow-lg block text-white bg-sase-blue ${activeId === m.id ? 'border-cyan-400 text-cyan-200' : 'border-white/50 group-hover:border-cyan-400 group-hover:text-cyan-200'}`}>
                            {m.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
