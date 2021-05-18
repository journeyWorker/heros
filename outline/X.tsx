import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function XIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(XIcon),
};

export default Asset;