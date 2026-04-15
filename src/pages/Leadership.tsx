import React from 'react';

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

function ProfileCard({ member, position, isSmall }: { member: Member, position: "under" | "side", isSmall?: boolean }) {
  return (
    <div className={`
      absolute z-[500]
      ${position === "under" ? "top-full left-10 mt-2" : "right-full top-1/2 -translate-y-1/2 mr-4"}
      ${isSmall ? "w-32" : "w-44"} p-1 bg-white shadow-[6px_6px_0px_#000] border-2 border-black 
      transform -skew-x-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
    `}>
      <div className="bg-black p-2">
        <div className="relative aspect-[3/4] bg-zinc-900 border border-white overflow-hidden">
          <img src={member.portrait} alt={member.name} className="w-full h-full object-cover" />
          <div className={`${isSmall ? "w-7 h-7" : "w-10 h-10"} absolute bottom-1 right-1 bg-white p-1 border border-black transform rotate-12`}>
             <img src={member.interest} alt="Interest" className="w-full h-full object-contain" />
          </div>
        </div>
        <p className="mt-1 text-[7px] font-black italic uppercase text-white text-center tracking-tighter line-height-none">
          {member.name}
        </p>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section 
      className="relative w-full h-screen min-h-[700px] bg-white select-none isolate overflow-hidden"
      style={{
        backgroundImage: 'url("/background/SASE .png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
        backgroundSize: '20% 100%',
        backgroundAttachment: 'fixed',
        imageRendering: 'crisp-edges'
      }}
    >
      <div className="absolute top-12 right-12 z-20 text-right">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter transform -skew-x-12 leading-none">
          <span className="text-cyan-700 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">SASE </span>
          <span className="text-black drop-shadow-[3px_3px_0px_rgba(14,116,144,1)]">LEADERSHIP</span>
        </h1>
      </div>

      <div className="relative h-full ml-[25%] flex flex-col justify-center gap-[6vh]">
        {TOP_LEADERSHIP.map((m) => (
          <div key={m.id} className="group relative flex items-center w-fit hover:z-[9999]">
            <div className="w-8 md:w-12 h-[3px] bg-black group-hover:bg-cyan-700 transition-all" />
            <h2 className="ml-3 text-[clamp(1rem,4.5vh,2.5rem)] font-black italic tracking-tighter uppercase text-black group-hover:text-cyan-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-transform group-hover:scale-105">
              {m.name}
            </h2>
            <ProfileCard member={m} position="under" />
          </div>
        ))}
      </div>

      <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
        <div className="relative w-0 h-0 flex items-center justify-center">
          
          <div className="absolute w-32 h-32 md:w-48 md:h-48 flex items-center justify-center pointer-events-none z-0 -translate-x-38   
                -translate-y-2">
            
            <img 
              src="/background/SASE Logo.png" 
              alt="SASE Logo" 
              className="w-full h-full object-contain opacity-80"
            />
          </div>

          {LOWER_BOARD.map((m, i, arr) => {
            const angle = (i / arr.length) * 360;
            return (
              <div 
                key={m.id}
                className="absolute group hover:z-[9999] origin-left"
                style={{ 
                  transform: `rotate(${angle}deg)` 
                }}
              >
                <div className="flex items-center" style={{ width: 'min(22vw, 280px)' }}>
                   {/* Half-branch: uses flex-grow but with a margin-left to create a gap from the center logo */}
                   <div className="flex-grow ml-[40%] h-[2px] bg-black group-hover:bg-cyan-700 transition-all duration-300" />
                   
                   <div style={{ transform: `rotate(-${angle}deg)` }} className="relative shrink-0 transition-transform hover:scale-105 flex items-center">
                      <ProfileCard member={m} position="side" isSmall />
                      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.12em] uppercase bg-black text-white px-3 py-1.5 border-l-2 border-white group-hover:border-cyan-700 group-hover:text-cyan-700 whitespace-nowrap shadow-md block cursor-help">
                        {m.name}
                      </span>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-right border-r-[8px] border-black pr-4 pointer-events-none z-10">
        <p className="text-[clamp(0.8rem,2.5vh,1.5rem)] font-black italic uppercase tracking-tighter text-black leading-none">
          "Advancing Professionals<br/>and Leaders"
        </p>
      </div>

    </section>
  );
}