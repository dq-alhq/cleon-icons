import * as React from 'react'
const SvgBrandNix = (props) => (
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
      d="M9.9 8.7 5 17.2l-1.1-1.9L5.2 13H2.6L2 12l.6-1h3.7l1.3-2.3zm.3 6.8h9.7l-1.1 1.9h-2.6l1.3 2.3-.6 1h-1.1L14 17.4h-2.7zm5.7-3.7L11 3.3h2.2l1.3 2.3 1.3-2.3h1.1l.6 1-1.9 3.2L17 9.8zm-2.1-3.3H4l1.1-1.9h2.6L6.4 4.3l.6-1h1.1L10 6.5h2.7zm.3 6.8L19 6.8l1.1 1.9-1.3 2.3h2.6l.6 1-.6 1h-3.7l-1.3 2.3zm-6-3.1 4.9 8.4h-2.2l-1.3-2.3-1.1 2.3H7.1l-.6-1 1.9-3.2L7 14.2z"
    />
  </svg>
)
export default SvgBrandNix