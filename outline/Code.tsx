import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function CodeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(CodeIcon),
};

export default Asset;