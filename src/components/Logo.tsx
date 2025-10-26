interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 outline-none focus:outline-none select-none ${className}`} style={{ outline: 'none', border: 'none' }}>
      <div className="relative">
        {/* Building icon with roof */}
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Roof */}
          <path 
            d="M20 4L4 14L8 14L8 36H32V14L36 14L20 4Z" 
            fill="#C6B080"
          />
          {/* Building body */}
          <rect 
            x="8" 
            y="14" 
            width="24" 
            height="22" 
            fill="#3F4733"
          />
          {/* Windows */}
          <rect x="12" y="18" width="4" height="4" fill="#C6B080" opacity="0.8" />
          <rect x="18" y="18" width="4" height="4" fill="#C6B080" opacity="0.8" />
          <rect x="24" y="18" width="4" height="4" fill="#C6B080" opacity="0.8" />
          <rect x="12" y="24" width="4" height="4" fill="#C6B080" opacity="0.8" />
          <rect x="18" y="24" width="4" height="4" fill="#C6B080" opacity="0.8" />
          <rect x="24" y="24" width="4" height="4" fill="#C6B080" opacity="0.8" />
          {/* Door */}
          <rect x="16" y="30" width="8" height="6" fill="#C6B080" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span 
          style={{ 
            fontFamily: 'Futura, sans-serif', 
            fontSize: '24px', 
            fontWeight: 800, 
            color: '#3F4733',
            letterSpacing: '1px',
            lineHeight: '1.2'
          }}
        >
          BRF GUIDEN
        </span>
        <span 
          style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '11px', 
            fontWeight: 500, 
            color: '#C6B080',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}
        >
          Kunskap för styrelser
        </span>
      </div>
    </div>
  );
}
