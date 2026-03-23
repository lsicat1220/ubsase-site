interface Member {
  id: number;
  name: string;
  desc: string;
  portrait: string;
  logo: string;
}

const TOP_LEADERSHIP: Member[] = [
  { id: 1, name: "JESSICA KIM", desc: "President", portrait: "/portraits/jessica.jpg", logo: "/logos/sase.png" },
  { id: 2, name: "HONG YI YANG", desc: "Vice President", portrait: "/portraits/hongyi.jpg", logo: "/logos/sase.png" },
  { id: 3, name: "BRENDAN ELLIOT", desc: "Secretary", portrait: "/portraits/brendan.jpg", logo: "/logos/sase.png" },
];

const BOARD_MEMBERS: Member[] = [
  { id: 4, name: "CHANDRA MIKO", desc: "Treasurer", portrait: "/portraits/chandra.jpg", logo: "/logos/sase.png" },
  { id: 5, name: "MATTHEW COLLINS", desc: "Events Coordinator", portrait: "/portraits/matthew.jpg", logo: "/logos/sase.png" },
  { id: 6, name: "DEVON SUKHDEO", desc: "Committee Coordinator", portrait: "/portraits/devon.jpg", logo: "/logos/sase.png" },
  { id: 7, name: "LORENZO SICAT", desc: "Technical Chair", portrait: "/portraits/lorenzo.jpg", logo: "/logos/sase.png" },
  { id: 8, name: "ISHRAQ MAHMUD", desc: "Public Relations", portrait: "/portraits/ishraq.jpg", logo: "/logos/sase.png" },
  { id: 9, name: "KHINE NYEIN YU", desc: "Co-Leader in Marketing", portrait: "/portraits/khine.jpg", logo: "/logos/sase.png" },
  { id: 10, name: "GARY WANG", desc: "Co-Leader in Marketing", portrait: "/portraits/gary.jpg", logo: "/logos/sase.png" },
  { id: 11, name: "CHRIS TEDIANTO", desc: "Cultural Chair", portrait: "/portraits/chris.jpg", logo: "/logos/sase.png" },
  { id: 12, name: "Brandan Zhang", desc: "Senior Advisor", portrait: "/portraits/brandan_z.jpg", logo: "/logos/sase.png" },
];

function MemberHoverCard({ member }: { member: Member }) {
  return (
    <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 absolute top-full mt-4 left-0 w-[400px] p-6 bg-white shadow-2xl border border-gray-100 pointer-events-none transition-all grid grid-cols-[120px_1fr] gap-4 z-50">
      <div className="w-full h-32 bg-blue-50/50 border border-blue-100 flex items-center justify-center overflow-hidden">
        {/* REPLACE IMAGE: Portrait for individual member */}
        <img 
          src={member.portrait} 
          alt={member.name} 
          className="w-full h-full object-cover" 
          onError={(e) => (e.currentTarget.style.display = 'none')} 
        />
        <span className="absolute text-[8px] uppercase tracking-widest text-blue-300 font-bold italic text-center">Portrait</span>
      </div>
      
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1">{member.name}</h4>
          <p className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-widest font-medium">{member.desc}</p>
        </div>
        
        <div className="w-16 h-16 bg-gray-50 border border-gray-100 self-end flex items-center justify-center overflow-hidden p-2">
          {/* REPLACE IMAGE: Secondary logo/image for individual member */}
          <img 
            src={member.logo} 
            alt="Logo" 
            className="w-full h-full object-contain" 
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="absolute text-[6px] uppercase tracking-tighter opacity-30 text-center">Small Image</span>
        </div>
      </div>
    </div>
  );
}

function TopMemberNode({ member, index }: { member: Member, index: number }) {
  const positions = [
    { top: '-18%', angle: -25, textOffset: '-22px' }, 
    { top: '50%', angle: 0, textOffset: '0px' },   
    { top: '118%', angle: 25, textOffset: '22px' }   
  ];
  
  const pos = positions[index];

  return (
    <div 
      className="absolute flex items-center group pointer-events-auto z-10 hover:z-[2000]"
      style={{ top: pos.top, left: '100%', transform: `translateY(-50%)`, marginLeft: '20px' }}
    >
      <div 
        className="w-24 h-[1px] bg-black/20 group-hover:bg-blue-600 transition-all duration-500 origin-left"
        style={{ transform: `rotate(${pos.angle}deg)` }}
      ></div>

      <div className="ml-6 relative" style={{ transform: `translateY(${pos.textOffset})` }}>
        <h3 className="text-3xl font-light uppercase tracking-[0.3em] whitespace-nowrap group-hover:text-blue-600 group-hover:italic transition-all duration-300">
          {member.name}
        </h3>
        <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-500 origin-left"></div>
        <MemberHoverCard member={member} />
      </div>
    </div>
  );
}

function BoardMemberNode({ member, index, total }: { member: Member, index: number, total: number }) {
  const angle = (index / total) * 360;
  return (
    <div 
      className="absolute group flex items-center pointer-events-auto z-10 hover:z-[2000]"
      style={{ transform: `rotate(${angle}deg) translateX(250px)` }}
    >
      <div className="w-16 h-[1px] bg-black/20 group-hover:bg-blue-600 transition-all duration-500"></div>
      <div className="ml-4 cursor-pointer relative" style={{ transform: `rotate(-${angle}deg)` }}>
        <h3 className="text-[11px] tracking-[0.2em] font-light uppercase whitespace-nowrap group-hover:text-blue-600 transition-all">
          {member.name}
        </h3>
        <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-500 origin-left"></div>
        <MemberHoverCard member={member} />
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <main className="relative w-full h-screen bg-[#f2f0eb] overflow-hidden text-black font-sans flex items-center justify-center">
      <div className="absolute top-12 left-12 flex flex-col z-50">
        <span className="text-blue-600 text-4xl font-serif italic tracking-tighter leading-none">SASE</span>
        <span className="text-blue-600 text-[10px] uppercase tracking-[0.7em] font-light mt-1">Leadership</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          <span className="absolute top-[18%] left-[12%] text-[160px] font-serif italic opacity-[0.03] leading-none select-none tracking-tighter">SCIENCE</span>
          <span className="text-[70px] font-serif italic opacity-[0.06] leading-none select-none">and</span>
          <span className="absolute bottom-[18%] right-[12%] text-[160px] font-serif italic opacity-[0.03] leading-none select-none tracking-tighter">ENGINEERING</span>
        </div>
      </div>

      <div className="absolute left-[-180px] w-[600px] h-[600px] flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-72 h-72 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100 z-20 pointer-events-auto">
           {/* REPLACE IMAGE: Central drawing for Top Leadership */}
           <span className="text-[10px] uppercase tracking-widest opacity-20 font-bold">Drawing</span>
           <div className="absolute inset-0 pointer-events-none">
              {TOP_LEADERSHIP.map((item, index) => (
                <TopMemberNode key={item.id} member={item} index={index} />
              ))}
           </div>
        </div>
      </div>

      <div className="absolute right-[10%] w-[450px] h-[450px] flex items-center justify-center z-10">
        <div className="relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 z-20">
            {/* REPLACE IMAGE: Central drawing for Board Members */}
            <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
            {BOARD_MEMBERS.map((item, index) => (
              <BoardMemberNode key={item.id} member={item} index={index} total={BOARD_MEMBERS.length} />
            ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-12 z-50">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold italic text-gray-900">"Advancing Professionals and Leaders"</p>
      </div>
    </main>
  );
}
