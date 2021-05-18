import React from 'react';

const size = {
  width: '24px',
  height: '24px',
};

function PaperAirplaneIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  );
}

const Asset = {
  size,
  View: React.memo(PaperAirplaneIcon),
};

export default Asset;