import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function UserRemoveIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(UserRemoveIcon),
};

export default Asset;