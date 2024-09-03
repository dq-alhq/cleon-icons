import * as React from "react";
const SvgIconGuitar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.336 2H23v2.222h-1.757l-4.687 4.711a5.5 5.5 0 0 0-1.558-1.566zm-8.389 5.556a4.4 4.4 0 0 1 3.127 1.301A4.46 4.46 0 0 1 16.368 12a4.45 4.45 0 0 1-.924 2.722 4.4 4.4 0 0 1-2.391 1.578v.144a5.57 5.57 0 0 1-1.619 3.929A5.5 5.5 0 0 1 7.526 22a5.5 5.5 0 0 1-3.907-1.627A5.57 5.57 0 0 1 2 16.444a5.57 5.57 0 0 1 1.619-3.928 5.5 5.5 0 0 1 3.907-1.627h.144a4.42 4.42 0 0 1 4.277-3.333m0 2.777c-.44 0-.861.176-1.172.489a1.67 1.67 0 0 0 0 2.357 1.653 1.653 0 0 0 2.345 0 1.67 1.67 0 0 0 0-2.357 1.65 1.65 0 0 0-1.173-.489M6.355 14.49l-.785.778 3.128 3.144.785-.789z"
    />
  </svg>
);
export default SvgIconGuitar;
