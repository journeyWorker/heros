import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ChevronDoubleRightIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ChevronDoubleRightIcon),
};

export default Asset;