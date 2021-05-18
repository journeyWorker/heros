import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ZoomOutIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ZoomOutIcon),
};

export default Asset;