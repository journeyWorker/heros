import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function MinusSmIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(MinusSmIcon),
};

export default Asset;