import * as React from 'react'
const SvgWhirl = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 12a2 2 0 0 0-2-2m2 2a2 2 0 0 1-2 2m2-2c0-3.314-2.462-6-5.5-6S3 8.686 3 12m9-2a2 2 0 0 0-2 2m2-2c-3.314 0-6 2.462-6 5.5S8.686 21 12 21m-2-9a2 2 0 0 0 2 2m-2-2c0 3.314 2.462 6 5.5 6s5.5-2.686 5.5-6m-9 2c3.314 0 6-2.462 6-5.5S15.314 3 12 3"
    />
  </svg>
)
export default SvgWhirl
