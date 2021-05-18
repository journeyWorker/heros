import React from 'react';

const size = {
  width: '20px',
  height: '20px',
};

function FolderIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(FolderIcon),
};

export default Asset;