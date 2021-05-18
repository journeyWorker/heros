import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function PlusIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(PlusIcon),
};

export default Asset;