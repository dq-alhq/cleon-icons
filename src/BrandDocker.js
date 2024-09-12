import * as React from 'react'
const SvgBrandDocker = (props) => (
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
      d="M8 10H5v3h3m0-3v3m0-3h3m-3 0V7h3m-3 6h3m0-3v3m0-3h3m-3 0V7m0 6h3v-3m0 0V7m-3 0h3m-3 0V4h3v3M4.571 18c1.5 0 2.047-.074 2.958-.78M10 16v.01m12-3.47c-1.804-.345-2.701-1.08-3.523-2.94-.487.696-1.102 1.568-.92 2.4.028.238-.32 1-.557 1H3c0 5.208 3.164 7 6.196 7 4.124.022 7.828-1.376 9.854-5 1.146-.101 2.296-1.505 2.95-2.46"
    />
  </svg>
)
export default SvgBrandDocker
