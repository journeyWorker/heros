import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function CurrencyPoundIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(CurrencyPoundIcon),
};

export default Asset;