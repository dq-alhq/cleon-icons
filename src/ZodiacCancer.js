import * as React from 'react'
const SvgZodiacCancer = (props) => (
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
      d="M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0c-.148-1.124.157-2.254.885-3.278S5.74 6.814 7.151 6.158c1.413-.656 3.064-1.062 4.79-1.177 1.727-.115 3.47.064 5.059.519m4 6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0c.148 1.124-.157 2.254-.885 3.278s-1.854 1.908-3.266 2.564c-1.413.656-3.064 1.062-4.79 1.177A14.9 14.9 0 0 1 7 18.5"
    />
  </svg>
)
export default SvgZodiacCancer
