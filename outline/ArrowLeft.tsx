import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowLeftIcon),
};

export default Asset;