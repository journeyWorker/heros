import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function DotsVerticalIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(DotsVerticalIcon),
};

export default Asset;