import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function SwitchHorizontalIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(SwitchHorizontalIcon),
};

export default Asset;