import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowNarrowRightIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowNarrowRightIcon),
};

export default Asset;