import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function SortDescendingIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(SortDescendingIcon),
};

export default Asset;