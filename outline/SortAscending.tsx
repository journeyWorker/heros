import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function SortAscendingIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(SortAscendingIcon),
};

export default Asset;