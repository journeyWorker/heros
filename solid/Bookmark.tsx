import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(BookmarkIcon),
};

export default Asset;