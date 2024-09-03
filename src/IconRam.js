import * as React from "react";
const SvgIconRam = (props) => (
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
      d="M2 6v12h9.286v-.667c0-.37.318-.666.714-.666s.714.296.714.666V18H22V6zm1.429 1.333H20.57v6H3.43zm1.428 1.334V12h4.286V8.667zm5 0V12h4.286V8.667zm5 0V12h4.286V8.667zM6.286 10h1.428v.667H6.286zm5 0h1.428v.667h-1.428zm5 0h1.428v.667h-1.428zM3.429 14.667H20.57v2h-6.718c-.316-.74-.954-1.334-1.853-1.334s-1.537.594-1.853 1.334H3.43z"
    />
  </svg>
);
export default SvgIconRam;
