import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function ArchiveIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
      <path
        fillRule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(ArchiveIcon),
};

export default Asset;