import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function ReplyIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ReplyIcon),
};

export default Asset;