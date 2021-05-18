import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function ArrowsExpandIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 19 20" fill="currentColor" {...props}>
      <path
        stroke="#374151"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArrowsExpandIcon),
};

export default Asset;