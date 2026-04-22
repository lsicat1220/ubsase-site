import React, { useState } from 'react';
import Navbar from '../components/Navbar';

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

function PopOutStar({ top, left, size, isHovering }: { top: string, left: string, size: string, isHovering: boolean }) {
  return (
    <div 
      className={`absolute ${size} pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
      style={{ 
        top: top, 
        left: left,
        transformOrigin: 'center center',
        transform: isHovering ? `rotate(180deg) scale(1.6)` : `rotate(0deg) scale(0)`,
        opacity: isHovering ? 1 : 0,
        zIndex: 40
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
        <path 
          d="M50 5 L63 38 L95 38 L69 58 L79 90 L50 72 L21 90 L31 58 L5 38 L37 38 Z" 
          fill="white" 
          stroke="black" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

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
        <p className="mt-1 text-[7px] font-black italic uppercase text-white text-center tracking-tighter">
          {member.name}
        </p>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative flex-grow w-full bg-white select-none isolate overflow-hidden -mt-20 pt-20">
        
        <div className="absolute top-0 -left-4 bottom-0 w-[27.5%] z-0 pointer-events-none">
          <img 
            src="/background/drawing.svg" 
            alt="" 
            className="w-full h-full object-cover object-left" 
          />
          
          <PopOutStar top="18%" left="30%" size="w-12 h-12" isHovering={isHoveringTop} />
          <PopOutStar top="45%" left="55%" size="w-16 h-16" isHovering={isHoveringTop} />
          <PopOutStar top="78%" left="30%" size="w-10 h-10" isHovering={isHoveringTop} />
        </div>

        <div className="absolute top-15 right-8 z-20 text-right">
          <h1 className="text-lg md:text-3xl font-black italic uppercase tracking-tighter transform -skew-x-6 leading-none">
            <span className="text-cyan-700 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">SASE </span>
            <span className="text-black drop-shadow-[2px_2px_0px_rgba(14,116,144,1)]">LEADERSHIP</span>
          </h1>
        </div>

        <div className="relative h-[calc(100vh-80px)] ml-[28%] flex flex-col justify-center gap-[6vh] z-10 pt-0 -mt-15">
          {TOP_LEADERSHIP.map((m) => (
            <div 
                key={m.id} 
                className="group relative flex items-center w-fit hover:z-[9999]"
                onMouseEnter={() => setIsHoveringTop(true)}
                onMouseLeave={() => setIsHoveringTop(false)}
            >
              <div className="w-8 md:w-12 h-[3px] bg-black group-hover:bg-cyan-700 transition-all" />
              <h2 className="ml-3 text-[clamp(1rem,4.5vh,2.5rem)] font-black italic tracking-tighter uppercase text-black group-hover:text-cyan-800 transition-transform group-hover:scale-105">
                {m.name}
              </h2>
              <ProfileCard member={m} position="under" />
            </div>
          ))}
        </div>

        <div className="absolute right-[25%] top-1/2 -translate-y-1/2 z-10">
          <div className="relative w-0 h-0 flex items-center justify-center">
            <div className="absolute w-32 h-32 md:w-40 md:h-40 flex items-center justify-center pointer-events-none z-0 -translate-x-2 -translate-y-2">
              <img src="/background/SASE Logo.png" className="w-full h-full object-contain opacity-80" alt="SASE Logo" />
            </div>

            {LOWER_BOARD.map((m, i, arr) => {
              const angle = (i / arr.length) * 360;
              const centerGap = 80; 
              
              const nameRadius = (m.id === 12) ? 147 : (i % 2 === 0 ? 110 : 150);
              const lineStart = centerGap; 
              const lineWidth = Math.max(0, nameRadius - lineStart);

              return (
                <div key={m.id} className="absolute origin-left group hover:z-[9999]" style={{ transform: `rotate(${angle}deg)`, width: '1px' }}>
                  <div 
                    className="absolute bg-black group-hover:bg-cyan-700 transition-all duration-300"
                    style={{ left: `${lineStart}px`, width: `${lineWidth}px`, height: '2px' }}
                  />
                  <div style={{ transform: `rotate(-${angle}deg)`, left: `${nameRadius}px` }} className="absolute top-1/2 -translate-y-1/2 flex items-center shrink-0">
                    <ProfileCard member={m} position="side" isSmall />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase bg-black text-white px-3 py-1.5 border-l-2 border-white group-hover:border-cyan-700 group-hover:text-cyan-700 whitespace-nowrap shadow-md block">
                      {m.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 text-right border-r-[8px] border-black pr-4 pointer-events-none z-10">
          <p className="text-[clamp(0.8rem,2.5vh,1.5rem)] font-black italic uppercase tracking-tighter text-black leading-none">
            "Advancing Professionals<br/>and Leaders"
          </p>
        </div>
      </section>
    </div>
  );
}