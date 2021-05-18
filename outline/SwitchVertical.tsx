import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function SwitchVerticalIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(SwitchVerticalIcon),
};

export default Asset;