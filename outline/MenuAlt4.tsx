import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function MenuAlt4Icon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4 16h16"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(MenuAlt4Icon),
};

export default Asset;