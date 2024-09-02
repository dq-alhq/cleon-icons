import * as React from "react";
const SvgIconBuildingCarousel = (props) => (
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
      d="M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8 22l4-10 4 10M3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgIconBuildingCarousel;
