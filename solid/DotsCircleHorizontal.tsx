import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function DotsCircleHorizontalIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(DotsCircleHorizontalIcon),
};

export default Asset;