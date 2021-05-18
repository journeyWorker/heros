import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowNarrowLeftIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowNarrowLeftIcon),
};

export default Asset;