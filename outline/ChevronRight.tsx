import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ChevronRightIcon),
};

export default Asset;