import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowCircleUpIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowCircleUpIcon),
};

export default Asset;