import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function HashtagIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(HashtagIcon),
};

export default Asset;