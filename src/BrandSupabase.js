import * as React from 'react'
const SvgBrandSupabase = (props) => (
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
      d="M11.419 2.863c-.012-.821-1.023-1.175-1.522-.53l-7.523 9.709c-.889 1.147-.093 2.837 1.336 2.837h7.78l.092 6.259c.012.82 1.023 1.173 1.522.53l7.523-9.711c.888-1.146.092-2.836-1.336-2.836h-7.832z"
    />
  </svg>
)
export default SvgBrandSupabase
