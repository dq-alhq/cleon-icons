import * as React from "react";
const SvgIconBrandPython = (props) => (
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
      fillOpacity={0.7}
      d="M11.53 2C6.658 2 6.962 4.114 6.962 4.114l.006 2.19h4.651v.657H5.12S2 6.606 2 11.525c0 4.917 2.723 4.742 2.723 4.742h1.624v-2.281s-.087-2.722 2.678-2.722h4.614s2.592.041 2.592-2.506v-4.21S16.625 2 11.531 2M8.967 3.473a.837.837 0 1 1 .056 1.673.837.837 0 0 1-.056-1.673"
    />
    <path
      fill="currentColor"
      d="M11.67 21.1c4.873 0 4.569-2.114 4.569-2.114l-.006-2.19h-4.651v-.657h6.499s3.119.354 3.119-4.564-2.723-4.743-2.723-4.743h-1.624v2.28s.087 2.723-2.678 2.723H9.56s-2.592-.042-2.592 2.506v4.21s-.393 2.55 4.701 2.55m2.564-1.473a.838.838 0 1 1-.001-1.675.838.838 0 0 1 .001 1.675"
    />
  </svg>
);
export default SvgIconBrandPython;
