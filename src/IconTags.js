import * as React from "react";
const SvgIconTags = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.573 18.407 2.834-2.834a2.026 2.026 0 0 0 0-2.864L13.29 5.593M6 9h-.01m1.869-3H5.025A2.025 2.025 0 0 0 3 8.025v2.834c0 .537.213 1.052.593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834-2.834a2.023 2.023 0 0 0 0-2.864L9.29 6.593A2.03 2.03 0 0 0 7.859 6"
    />
  </svg>
);
export default SvgIconTags;
