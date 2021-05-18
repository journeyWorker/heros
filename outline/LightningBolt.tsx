import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function LightningBoltIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(LightningBoltIcon),
};

export default Asset;