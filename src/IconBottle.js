import * as React from "react";
const SvgIconBottle = (props) => (
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
      d="M13.7 3.579c0 1.712.558 3.381 1.595 4.776l.055.073A8.27 8.27 0 0 1 17 13.37v6.525a2.06 2.06 0 0 1-.644 1.488A2.25 2.25 0 0 1 14.8 22H8.2a2.25 2.25 0 0 1-1.556-.617A2.06 2.06 0 0 1 6 19.895v-6.527c0-1.77.576-3.496 1.65-4.94l.055-.073A8 8 0 0 0 9.3 3.579m0 1.579h4.4V3.053c0-.28-.116-.547-.322-.745A1.13 1.13 0 0 0 12.6 2h-2.2c-.292 0-.572.11-.778.308a1.03 1.03 0 0 0-.322.745z"
    />
  </svg>
);
export default SvgIconBottle;
