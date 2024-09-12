import * as React from 'react'
const SvgVaccineBottle = (props) => (
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
      d="M14 6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1m4 0h-4m4 0v.98a1.795 1.795 0 0 0 1.5 1.77c.866.144 1.5.893 1.5 1.77V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8.48c0-.877.634-1.626 1.5-1.77A1.794 1.794 0 0 0 10 6.98V6m-3 6h10M7 18h10"
    />
  </svg>
)
export default SvgVaccineBottle
