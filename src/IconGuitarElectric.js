import * as React from "react";
const SvgIconGuitarElectric = (props) => (
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
      d="M20.336 2H23v2.23h-1.757l-5.847 5.902-1.559-1.55zm-8.389 6.693c.288 0 .553.111.785.334l2.21 2.231c.2.223.321.48.321.781l-.11.446-4.421 8.924c-.21.39-.597.591-.995.591-.387 0-.785-.2-.984-.591l-2.056-4.127-4.09-2.008a1.132 1.132 0 0 1 0-2.008l8.843-4.462c.155-.111.32-.111.497-.111m-2.929 3.145-.773.759 3.15 3.179.751-.781zM7.46 13.411l-.785.792 3.128 3.157.785-.792z"
    />
  </svg>
);
export default SvgIconGuitarElectric;
