import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function CurrencyBangladeshiIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(CurrencyBangladeshiIcon),
};

export default Asset;