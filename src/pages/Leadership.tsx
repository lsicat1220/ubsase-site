import { useState, useEffect, useRef } from 'react';

type BoardView = 'default' | 'upper' | 'lower' | 'advisors';

const DESIGN_W = 1440;
const DESIGN_H = 900;

const SCREEN_ORIGIN = '49% 47%';
const ZOOM_SCALE = 2;

const BACK_BTN_SRC_SIZE = 512;
const BACK_BTN_CROP = { x: 172, y: 130, w: 197, h: 78 };
const BACK_BTN_DISPLAY_W = 95;

type PopupDir = 'above' | 'below' | 'left' | 'right';
const POPUP_DIR: Record<number, PopupDir> = {
  1: 'left',   // Hong Yi Yang
  2: 'right',  // Devon
  3: 'left',   // Karyna
  10: 'below', // Selena
  11: 'below', // Yoshita
  12: 'below', // Alina
  13: 'left',  // Brendan
  14: 'right', // Chandra
  16: 'below', // Levi
};

interface Member {
  id: number;
  name: string;
  portrait: string;
  interest: string;
  role?: string;
}

const TOP_LEADERSHIP: Member[] = [
  { id: 1, name: "HONG YI YANG", portrait: "/p/hongyi.jpg", interest: "/i/filler.png", role: "President" },
  { id: 2, name: "DEVON SUKDHEO", portrait: "/p/DEVON.jpg", interest: "/i/filler.png", role: "Vice President" },
  { id: 3, name: "KARYNA", portrait: "/p/KARYNA.jpg", interest: "/i/filler.png", role: "Secretary" },
  { id: 4, name: "VIVIAN", portrait: "/p/viv.webp", interest: "/i/filler.png", role: "Treasurer" },
];

const LOWER_BOARD: Member[] = [
  { id: 5, name: "IVAN", portrait: "/p/IVAN.jpeg", interest: "/i/filler.png", role: "Videographer" },
  { id: 6, name: "TOBEY NGUYEN", portrait: "/p/TOBEY.jpg", interest: "/i/filler.png", role: "Technical Director" },
  { id: 7, name: "LORENZO SICAT", portrait: "/p/lorenzo.jpg", interest: "/i/filler.png", role: "Technical Director" },
  { id: 8, name: "ISHRAQ MAHMUD", portrait: "/p/ishraq.jpg", interest: "/i/filler.png", role: "Public Relations" },
  { id: 9, name: "KRIS", portrait: "/p/KRIS.jpg", interest: "/i/filler.png", role: "Marketing" },
  { id: 10, name: "SELENA", portrait: "/p/SELENA.jpg", interest: "/i/filler.png", role: "Marketing" },
  { id: 11, name: "YOSHITA", portrait: "/p/YOSHITA.jpg", interest: "/i/filler.png", role: "Cultural Chair" },
  { id: 12, name: "ALINA", portrait: "/p/alina.jpg", interest: "/i/filler.png", role: "Events Coordinator" },
  { id: 16, name: "LEVI", portrait: "/p/LEVI.jpg", interest: "/i/filler.png", role: "Committee Coordinator" },
];

const SENIOR_ADVISORS: Member[] = [
  { id: 13, name: "BRENDAN ELLIOT", portrait: "/p/brendan.jpg", interest: "/i/filler.png" },
  { id: 14, name: "CHANDRA TIEN", portrait: "/p/chandra.jpg", interest: "/i/filler.png" },
  { id: 15, name: "JESSICA KIM", portrait: "/p/jessica.jpg", interest: "/i/filler.png" },
];

function BackButton({ onClick }: { onClick: () => void }) {
  const scale = BACK_BTN_DISPLAY_W / BACK_BTN_CROP.w;
  return (
    <button
      onClick={onClick}
      className="absolute top-36 left-44 z-20 transition-transform hover:scale-125"
      style={{
        width: BACK_BTN_CROP.w * scale,
        height: BACK_BTN_CROP.h * scale,
        filter: 'drop-shadow(0 0 5px rgba(103,232,249,0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
      }}
      aria-label="Back"
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/background/Back Button.png"
          alt="Back"
          className="absolute max-w-none"
          style={{
            width: BACK_BTN_SRC_SIZE * scale,
            height: BACK_BTN_SRC_SIZE * scale,
            left: -BACK_BTN_CROP.x * scale,
            top: -BACK_BTN_CROP.y * scale,
          }}
          draggable={false}
        />
      </div>
    </button>
  );
}

const POPUP_DIR_CLASSES: Record<PopupDir, string> = {
  above: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  below: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

function PopupCard({ member, isSmall, isOpen, dir = 'above' }: { member: Member; isSmall?: boolean; isOpen?: boolean; dir?: PopupDir }) {
  return (
    <div className={`
      absolute z-[500] ${POPUP_DIR_CLASSES[dir]}
      ${isSmall ? 'w-32' : 'w-44'} p-1 bg-white shadow-[6px_6px_0px_#000] border-2 border-black
      -skew-x-6 transition-all duration-300 pointer-events-none
      ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
    `}>
      <div className="bg-black p-2">
        <div className="relative aspect-[3/4] bg-zinc-900 border border-white overflow-hidden">
          <img src={member.portrait} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <p className="mt-1 text-[7px] font-black uppercase text-white text-center tracking-tighter">
          {member.name}
        </p>
        {member.role && (
          <p className="text-[6px] font-bold uppercase text-cyan-600 text-center tracking-tighter">
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const [view, setView] = useState<BoardView>('default');
  const [activeId, setActiveId] = useState<number | null>(null);
  const frameRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  const changeView = (v: BoardView) => {
    if (v !== 'default') window.scrollTo(0, 0);
    setView(v);
    setActiveId(null);
  };
  const toggleActive = (id: number) => setActiveId(prev => (prev === id ? null : id));

  useEffect(() => {
    const zoomed = view !== 'default';
    document.documentElement.style.overflow = zoomed ? 'hidden' : '';
    document.body.style.overscrollBehaviorY = zoomed ? 'none' : 'auto';
    document.body.style.overflow = zoomed ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overscrollBehaviorY = 'auto';
      document.body.style.overflow = '';
    };
  }, [view]);

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
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale * (view === 'default' ? 1 : ZOOM_SCALE)})`,
          transformOrigin: SCREEN_ORIGIN,
          transition: 'transform 0.7s cubic-bezier(0.65,0,0.35,1)',
        }}
      >
        <img
          src="/background/SASE design new@2x.png"
          alt="SASE Leadership"
          className="w-full h-full"
          draggable={false}
        />

        <div
          className="absolute"
          style={{ left: '22%', top: '11%', width: '54%', height: '72%' }}
        >
          {view !== 'default' && <BackButton onClick={() => changeView('default')} />}

          <div
            className="flex flex-col items-center justify-center"
            style={{ marginTop: '16%', height: '84%' }}
          >
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
                <button
                  onClick={() => changeView('advisors')}
                  className="px-6 py-4 -translate-x-1 bg-transparent font-black text-lg uppercase tracking-widest border-4 border-white -skew-x-6 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all"
                  style={{ color: 'white' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#026CB1'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
                >
                  <span className="inline-block skew-x-6">Senior Advisors</span>
                </button>
              </div>
            )}

            {view === 'upper' && (
              <div className="flex flex-col items-center gap-4 -translate-y-8">
                {TOP_LEADERSHIP.map((m) => (
                  <div
                    key={m.id}
                    className={`group relative flex items-center w-fit ${activeId === m.id ? 'z-[9999]' : 'hover:z-[9999]'}`}
                    onClick={() => toggleActive(m.id)}
                  >
                    <h2
                      className={`font-black uppercase transition-colors whitespace-nowrap cursor-pointer ${activeId === m.id ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}
                      style={{
                        fontSize: '28px',
                        letterSpacing: '-0.02em',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
                        fontStyle: 'italic',
                        transform: 'skewX(-6deg)',
                        display: 'inline-block',
                      }}
                    >
                      {m.name}
                    </h2>
                    <PopupCard member={m} isOpen={activeId === m.id} dir={POPUP_DIR[m.id]} />
                  </div>
                ))}
              </div>
            )}

            {view === 'advisors' && (
              <div className="flex flex-col items-center gap-4 -translate-y-8">
                {SENIOR_ADVISORS.map((m) => (
                  <div
                    key={m.id}
                    className={`group relative flex items-center w-fit ${activeId === m.id ? 'z-[9999]' : 'hover:z-[9999]'}`}
                    onClick={() => toggleActive(m.id)}
                  >
                    <h2
                      className={`font-black uppercase transition-colors whitespace-nowrap cursor-pointer ${activeId === m.id ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}
                      style={{
                        fontSize: '28px',
                        letterSpacing: '-0.02em',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
                        fontStyle: 'italic',
                        transform: 'skewX(-6deg)',
                        display: 'inline-block',
                      }}
                    >
                      {m.name}
                    </h2>
                    <PopupCard member={m} isOpen={activeId === m.id} dir={POPUP_DIR[m.id]} />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {view === 'lower' && (
          <div
            className={`absolute ${activeId !== null ? 'z-30' : ''}`}
            style={{ left: '49.3%', top: '47%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-0 h-0">
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '70px',
                  height: '70px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(140,210,255,0.4) 0%, rgba(90,180,255,0.18) 40%, rgba(90,180,255,0) 72%)',
                  filter: 'blur(6px)',
                }}
              />
              <img
                src="/background/SASE Logo.png"
                alt="SASE Logo"
                className="absolute w-28 h-28 max-w-none object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.7)] pointer-events-none"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
              {LOWER_BOARD.map((m, i, arr) => {
                const angle = (i / arr.length) * 360;
                return (
                  <div
                    key={m.id}
                    className={`absolute group origin-left ${activeId === m.id ? 'z-[9999]' : 'hover:z-[9999]'}`}
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      style={{
                        opacity: 0,
                        animation: 'fadeInMember 0.4s ease forwards',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className="flex items-center" style={{ width: '190px' }}>
                        <div
                          className={`flex-grow ml-[40%] h-[2px] transition-all duration-300 ${activeId === m.id ? 'bg-cyan-300' : 'bg-cyan-100/70 group-hover:bg-cyan-300'}`}
                          style={{ boxShadow: activeId === m.id ? '0 0 10px 1px rgba(103,232,249,0.9)' : '0 0 6px rgba(103,232,249,0.5)' }}
                        />
                        <div
                          style={{ transform: `rotate(-${angle}deg)` }}
                          className={`relative shrink-0 flex items-center transition-transform cursor-pointer ${activeId === m.id ? 'scale-105' : 'hover:scale-105'}`}
                          onClick={() => toggleActive(m.id)}
                        >
                          <PopupCard member={m} isSmall isOpen={activeId === m.id} dir={POPUP_DIR[m.id]} />
                          <span
                            className={`text-[8px] font-bold tracking-[0.05em] uppercase px-2 py-1 border-l-2 whitespace-nowrap min-w-[80px] block text-white bg-sase-blue ${activeId === m.id ? 'border-cyan-400 text-cyan-200' : 'border-white/50 group-hover:border-cyan-400 group-hover:text-cyan-200'}`}
                            style={{
                              boxShadow: activeId === m.id
                                ? '0 0 22px 3px rgba(56,189,248,0.7), 0 4px 12px rgba(0,0,0,0.35)'
                                : '0 0 14px 1px rgba(56,189,248,0.4), 0 4px 12px rgba(0,0,0,0.35)',
                            }}
                          >
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
