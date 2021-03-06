import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(BookmarkIcon),
};

export default Asset;