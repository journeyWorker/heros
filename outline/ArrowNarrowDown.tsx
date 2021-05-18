import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ArrowNarrowDownIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 17l-4 4m0 0l-4-4m4 4V3"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowNarrowDownIcon),
};

export default Asset;