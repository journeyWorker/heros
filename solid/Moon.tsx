import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function MoonIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(MoonIcon),
};

export default Asset;