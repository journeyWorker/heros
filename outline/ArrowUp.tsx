import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowUpIcon),
};

export default Asset;