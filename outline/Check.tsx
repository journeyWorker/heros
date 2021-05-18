import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function CheckIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(CheckIcon),
};

export default Asset;