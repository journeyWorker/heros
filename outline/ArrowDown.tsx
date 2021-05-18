import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowDownIcon),
};

export default Asset;