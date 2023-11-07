import React from 'react';

const Icon: React.FC<{ size?: string; color?: string }> = ({
  size = '10',
  color = '#121214',
}) => {
  return (
    <svg width={size} height={size} viewBox="2.01 2.006 19.36 19.514">
      <path
        fill={color}
        d="M20.75 21.52a.62.62 0 01-.44-.18l-6.11-6.11a.627.627 0 01-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 006.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 01-.44.18z"
      />
    </svg>
  );
};

export default Icon;