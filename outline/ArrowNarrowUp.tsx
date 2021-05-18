import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowNarrowUpIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowNarrowUpIcon),
};

export default Asset;