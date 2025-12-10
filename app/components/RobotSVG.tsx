'use client';

export default function RobotSVG() {
  return (
    <div className="robot-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" id="robot">
        <defs>
          <linearGradient id="bodyGradient" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#a855f7"/>
            <stop offset="50%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#6d28d9"/>
          </linearGradient>
          <linearGradient id="visorGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1f1133"/>
            <stop offset="100%" stopColor="#0a0014"/>
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff"/>
            <stop offset="50%" stopColor="#c084fc"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4"/>
            </feComponentTransfer>
            <feColorMatrix type="matrix" values="
              0.5 0 0 0 0.3
              0 0.3 0 0 0.2
              0 0 0.8 0 0.5
              0 0 0 1 0"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="violetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="0" result="offsetblur"/>
            <feFlood floodColor="#a855f7" floodOpacity="0.6"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <ellipse id="shadow" cx="300" cy="750" rx="100" ry="20" fill="#8b5cf6" opacity="0.3"/>
        <g id="left-arm" filter="url(#violetGlow)">
          <path 
            d="M 190 400 
               Q 140 420 140 500 
               Q 140 580 180 580 
               Q 220 580 220 500 
               Q 220 450 210 400 Z" 
            fill="url(#bodyGradient)" 
            stroke="#6d28d9" 
            strokeWidth="8"
          />
          <path d="M 160 440 Q 160 480 165 520" fill="none" stroke="#e9d5ff" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
        </g>
        <g id="right-arm" filter="url(#violetGlow)">
          <path 
            d="M 410 400 
               Q 460 420 460 500 
               Q 460 580 420 580 
               Q 380 580 380 500 
               Q 380 450 390 400 Z" 
            fill="url(#bodyGradient)" 
            stroke="#6d28d9" 
            strokeWidth="8"
          />
          <path d="M 440 440 Q 440 480 435 520" fill="none" stroke="#e9d5ff" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
        </g>
        <g id="body" filter="url(#violetGlow)">
          <path d="M 260 330 L 260 380 L 340 380 L 340 330 Z" fill="#7c3aed" stroke="#6d28d9" strokeWidth="8"/>
          <path 
            d="M 210 380 
               Q 180 380 180 450 
               Q 180 620 300 650 
               Q 420 620 420 450 
               Q 420 380 390 380 
               Z" 
            fill="url(#bodyGradient)" 
            stroke="#6d28d9" 
            strokeWidth="8"
          />
          <path 
            d="M 220 520 
               L 270 535 
               L 330 535 
               L 380 520" 
            fill="none" 
            stroke="#e9d5ff" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            opacity="0.9"
          />
          <path d="M 210 410 Q 230 395 260 400" fill="none" stroke="#e9d5ff" strokeWidth="8" strokeLinecap="round" opacity="0.8"/>
          <circle cx="220" cy="430" r="5" fill="#e9d5ff" opacity="1">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        <g id="head" filter="url(#violetGlow)">
          <g id="left-ear">
            <rect x="155" y="240" width="20" height="40" fill="#7c3aed" stroke="#6d28d9" strokeWidth="6"/>
            <rect x="135" y="220" width="30" height="80" rx="10" ry="10" fill="url(#bodyGradient)" stroke="#6d28d9" strokeWidth="8"/>
          </g>
          <g id="right-ear">
            <rect x="425" y="240" width="20" height="40" fill="#7c3aed" stroke="#6d28d9" strokeWidth="6"/>
            <rect x="435" y="220" width="30" height="80" rx="10" ry="10" fill="url(#bodyGradient)" stroke="#6d28d9" strokeWidth="8"/>
          </g>
          <path d="M 260 160 Q 300 140 340 160 L 340 170 L 260 170 Z" fill="url(#bodyGradient)" stroke="#6d28d9" strokeWidth="8"/>
          <rect x="175" y="170" width="250" height="180" rx="50" ry="50" fill="url(#bodyGradient)" stroke="#6d28d9" strokeWidth="8"/>
          <rect x="200" y="195" width="200" height="130" rx="30" ry="30" fill="url(#visorGradient)" stroke="#a855f7" strokeWidth="6"/>
          <path d="M 195 190 Q 220 180 260 185" fill="none" stroke="#e9d5ff" strokeWidth="8" strokeLinecap="round" opacity="0.9"/>
          <circle cx="205" cy="210" r="6" fill="#e9d5ff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3s" repeatCount="indefinite"/>
          </circle>
          <g transform="translate(0, 10)">
            <g id="face">
              <g id="normal-face">
                <path d="M 240 250 Q 260 240 280 250 Z" fill="url(#glowGradient)"/>
                <path d="M 320 250 Q 340 240 360 250 Z" fill="url(#glowGradient)"/>
                <path d="M 290 290 Q 300 305 310 290 Z" fill="url(#glowGradient)"/>
              </g>
              <g id="surprise-face" opacity="0">
                <ellipse cx="260" cy="245" rx="18" ry="22" fill="url(#glowGradient)"/>
                <ellipse cx="340" cy="245" rx="18" ry="22" fill="url(#glowGradient)"/>
                <ellipse cx="300" cy="290" rx="16" ry="22" fill="url(#glowGradient)"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
