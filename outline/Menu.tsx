import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(MenuIcon),
};

export default Asset;