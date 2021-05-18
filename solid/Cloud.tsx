import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function CloudIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(CloudIcon),
};

export default Asset;