import * as React from "react";
const SvgIconWood = (props) => (
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
      d="M6 5.5c0 .663.632 1.299 1.757 1.768S10.41 8 12 8s3.117-.263 4.243-.732C17.368 6.798 18 6.163 18 5.5m-12 0c0-.663.632-1.299 1.757-1.768S10.41 3 12 3s3.117.263 4.243.732C17.368 4.202 18 4.837 18 5.5m-12 0v6.627a1.414 1.414 0 0 0-1.586 2.287L6 16v2c0 1.657 2.686 3 6 3h.275C15.46 20.925 18 19.61 18 18v-4l1.586-1.586.097-.108A1.415 1.415 0 0 0 18 10.126V5.5m-8 7V14m4 2v1"
    />
  </svg>
);
export default SvgIconWood;
