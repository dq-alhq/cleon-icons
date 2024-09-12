import * as React from 'react'
const SvgBrandWindows = (props) => (
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
      d="m2 4.719 7.822-1.066.004 7.546-7.82.044zm7.818 7.349.007 7.552-7.82-1.075v-6.528zm.949-8.554L21.139 2v9.103l-10.372.081zm10.375 8.624-.002 9.061-10.372-1.464-.015-7.615z"
    />
  </svg>
)
export default SvgBrandWindows
