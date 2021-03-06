import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ShoppingBagIcon),
};

export default Asset;