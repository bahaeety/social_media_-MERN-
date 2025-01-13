export default function EchoLogo  ({ width = 300, height = 100, className = '' }) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 300 100"
        width={width}
        height={height}
        className={className}
      >
        <g transform="translate(40, 50)">
          <path 
            d="M0,-25 A25,25 0 0,1 0,25" 
            stroke="#1DA1F2" 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round"
          />
          
          <path 
            d="M-8,-15 A15,15 0 0,1 -8,15" 
            stroke="#1DA1F2" 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
          />
                
          <path 
            d="M-14,-8 A8,8 0 0,1 -14,8" 
            stroke="#1DA1F2" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
          />
                
          <circle cx="-18" cy="0" r="4" fill="#1DA1F2"/>
        </g>
  
        <text 
          x="120" 
          y="60" 
          fontFamily="Arial, sans-serif" 
          fontSize="42" 
          fontWeight="bold" 
          letterSpacing="-0.5"
        >
          <tspan fill="#1DA1F2">Ec</tspan>
          <tspan fill="#2C3E50">ho</tspan>
        </text>
  
        <text 
          x="120" 
          y="80" 
          fontFamily="Arial, sans-serif" 
          fontSize="14" 
          fill="#666666"
        >
          Amplify your voice
        </text>
      </svg>
    );
  };
  
