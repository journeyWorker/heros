import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(TrendingUpIcon),
};

export default Asset;