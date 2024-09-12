import * as React from 'react'
const SvgBrandLinktree = (props) => (
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
      d="m13.716 6.877 3.38-3.43 1.962 1.984-3.545 3.337H20.5v2.754h-5.011l3.57 3.423-1.963 1.945-4.846-4.808-4.845 4.808-1.963-1.938 3.57-3.423H4V8.768h4.987L5.442 5.43l1.962-1.984 3.38 3.43V2h2.932zm-2.932 8.588h2.932V22h-2.932z"
    />
  </svg>
)
export default SvgBrandLinktree
