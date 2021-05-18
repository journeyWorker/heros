import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function SelectorIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(SelectorIcon),
};

export default Asset;