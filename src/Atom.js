import * as React from 'react'
const SvgAtom = (props) => (
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
      d="M12 12v.01m7.071-7.08c-1.562-1.563-6 .336-9.9 4.242-3.905 3.905-5.804 8.337-4.242 9.9 1.562 1.561 6-.338 9.9-4.244 3.905-3.905 5.804-8.336 4.242-9.899m-14.142 0c-1.562 1.561.337 6 4.243 9.9 3.905 3.904 8.337 5.803 9.9 4.241 1.561-1.562-.338-6-4.244-9.9-3.905-3.905-8.336-5.804-9.899-4.242"
    />
  </svg>
)
export default SvgAtom
