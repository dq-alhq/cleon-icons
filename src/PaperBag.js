import * as React from 'react'
const SvgPaperBag = (props) => (
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
      d="M6 21h12a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236l-.944-1.888A5 5 0 0 1 18 6.82V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3m0 13a2 2 0 0 1-2-2v-5.82a5 5 0 0 1 .528-2.236L6 8m0 13a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236L6 8m5-1h2m-1 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgPaperBag
