import * as React from "react";
const SvgIconCloudSnow = (props) => (
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
      d="M7 18a4.82 4.82 0 0 1-3.327-1.318A4.4 4.4 0 0 1 2.295 13.5c0-1.194.496-2.338 1.378-3.182A4.82 4.82 0 0 1 7 9c.295-1.313 1.157-2.467 2.397-3.207a6 6 0 0 1 2.025-.749 6.2 6.2 0 0 1 2.19.006c.721.131 1.408.39 2.02.76.61.37 1.135.844 1.543 1.397.407.552.69 1.172.832 1.823.141.65.139 1.32-.007 1.97h1a3.5 3.5 0 1 1 0 7m-8-3v.01m0 3v.01m0 3v.01m4-4v.01m0 3v.01"
    />
  </svg>
);
export default SvgIconCloudSnow;
