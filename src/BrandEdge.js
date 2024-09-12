import * as React from 'react'
const SvgBrandEdge = (props) => (
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
      d="M19.385 17.145a9 9 0 1 1 1.593-5.773c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.85-1.745.121-2.927 1.156-2.784 3.201.28 3.99 4.444 6.205 10.36 4.79M3.022 12.63C2.739 8.584 11.739 5.4 14.27 9.94m-1.642 11.038c-2.993.21-5.162-4.725-3.567-9.748"
    />
  </svg>
)
export default SvgBrandEdge
