import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function MinusIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(MinusIcon),
};

export default Asset;