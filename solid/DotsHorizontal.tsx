import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function DotsHorizontalIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(DotsHorizontalIcon),
};

export default Asset;