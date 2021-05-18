import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowCircleLeftIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowCircleLeftIcon),
};

export default Asset;