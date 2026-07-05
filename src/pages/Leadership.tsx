import { useState } from 'react';

type BoardView = 'default' | 'upper' | 'lower';

interface Member {
  id: number;
  name: string;
  portrait: string;
  interest: string;
}

const TOP_LEADERSHIP: Member[] = [
  { id: 1, name: "JESSICA KIM", portrait: "/p/jessica.jpg", interest: "/i/coffee.png" },
  { id: 2, name: "HONG YI YANG", portrait: "/p/hongyi.jpg", interest: "/i/gaming.png" },
  { id: 3, name: "BRENDAN ELLIOT", portrait: "/p/brendan.jpg", interest: "/i/music.png" },
  { id: 4, name: "CHANDRA MIKO", portrait: "/p/chandra.jpg", interest: "/i/art.png" },
];

const LOWER_BOARD: Member[] = [
  { id: 5, name: "MATTHEW COLLINS", portrait: "/p/matt.jpg", interest: "/i/code.png" },
  { id: 6, name: "DEVON SUKHDEO", portrait: "/p/devon.jpg", interest: "/i/sports.png" },
  { id: 7, name: "LORENZO SICAT", portrait: "/p/lorenzo.jpg", interest: "/i/tech.png" },
  { id: 8, name: "ISHRAQ MAHMUD", portrait: "/p/ishraq.jpg", interest: "/i/film.png" },
  { id: 9, name: "KHINE NYEIN YU", portrait: "/p/khine.jpg", interest: "/i/design.png" },
  { id: 10, name: "GARY WANG", portrait: "/p/gary.jpg", interest: "/i/food.png" },
  { id: 11, name: "CHRIS TEDIANTO", portrait: "/p/chris.jpg", interest: "/i/culture.png" },
  { id: 12, name: "BRANDAN ZHANG", portrait: "/p/brandon.jpg", interest: "/i/advisor.png" },
];

function PopupCard({ member, isSmall }: { member: Member; isSmall?: boolean }) {
  return (
    <div className={`
      absolute z-[500] bottom-full left-1/2 -translate-x-1/2 mb-2
      ${isSmall ? 'w-32' : 'w-44'} p-1 bg-white shadow-[6px_6px_0px_#000] border-2 border-black
      -skew-x-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
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

  return (
    <section className="w-full h-screen bg-white flex items-center justify-center overflow-hidden select-none">
      {/* Container locked to 1440×900 aspect ratio so % overlays map accurately to the drawing */}
      <div
        className="relative"
        style={{ aspectRatio: '1440 / 900', height: '100%', maxWidth: '100%' }}
      >
        <img
          src="/background/SASE design new.png"
          alt="SASE Leadership"
          className="w-full h-full"
          draggable={false}
        />

        {/* ── Blue screen overlay ─────────────────────────────────────── */}
        {/* Approx bounds of the drawn blue phone screen within the 1440×900 canvas */}
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{ left: '22%', top: '11%', width: '54%', height: '72%' }}
        >
          {/* Status bar is the top ~16% of the blue area — leave it alone */}
          <div className="w-full flex flex-col items-center justify-center" style={{ marginTop: '16%', height: '84%' }}>

            {/* DEFAULT STATE */}
            {view === 'default' && (
              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={() => setView('upper')}
                  className="px-8 py-3 bg-white text-sase-blue font-black text-base uppercase tracking-widest border-2 border-white rounded-full hover:bg-sase-blue hover:text-white transition-all shadow-lg"
                >
                  Upper Board
                </button>
                <button
                  onClick={() => setView('lower')}
                  className="px-8 py-3 bg-white text-sase-blue font-black text-base uppercase tracking-widest border-2 border-white rounded-full hover:bg-sase-blue hover:text-white transition-all shadow-lg"
                >
                  Lower Board
                </button>
              </div>
            )}

            {/* UPPER BOARD STATE */}
            {view === 'upper' && (
              <div className="relative w-full h-full flex flex-col justify-center items-start px-6 gap-5">
                {TOP_LEADERSHIP.map((m) => (
                  <div key={m.id} className="group relative flex items-center w-fit hover:z-[9999]">
                    <div className="w-5 h-[2px] bg-white group-hover:bg-cyan-300 transition-all" />
                    <h2 className="ml-2 text-[clamp(0.75rem,2vh,1.3rem)] font-black uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                      {m.name}
                    </h2>
                    <PopupCard member={m} />
                  </div>
                ))}
                <button
                  onClick={() => setView('default')}
                  className="absolute bottom-2 right-4 text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-widest"
                >
                  ← Back
                </button>
              </div>
            )}

            {/* LOWER BOARD STATE — "Members Loading..." on screen */}
            {view === 'lower' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <p
                  className="font-black text-[clamp(1rem,2.5vh,1.6rem)] text-white text-center"
                  style={{
                    textShadow: '0 0 12px rgba(255,255,255,0.9), 0 0 24px rgba(255,255,255,0.5)',
                    letterSpacing: '0.05em',
                  }}
                >
                  Members Loading...
                </p>
                <button
                  onClick={() => setView('default')}
                  className="absolute bottom-2 right-4 text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-widest"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Lower board radial — centered on phone ───────────────────── */}
        {view === 'lower' && (
          <div
            className="absolute"
            style={{ left: '49%', top: '47%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-0 h-0">
              {LOWER_BOARD.map((m, i, arr) => {
                const angle = (i / arr.length) * 360;
                return (
                  <div
                    key={m.id}
                    className="absolute group hover:z-[9999] origin-left"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="flex items-center" style={{ width: 'min(22vw, 260px)' }}>
                      <div className="flex-grow ml-[42%] h-[2px] bg-white/70 group-hover:bg-cyan-300 transition-all duration-300" />
                      <div
                        style={{ transform: `rotate(-${angle}deg)` }}
                        className="relative shrink-0 flex items-center hover:scale-105 transition-transform"
                      >
                        <PopupCard member={m} isSmall />
                        <span className="text-[9px] font-bold tracking-[0.12em] uppercase bg-black text-white px-3 py-1.5 border-l-2 border-white group-hover:border-cyan-300 group-hover:text-cyan-300 whitespace-nowrap shadow-md block cursor-help">
                          {m.name}
                        </span>
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
