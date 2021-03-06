import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function FastForwardIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(FastForwardIcon),
};

export default Asset;