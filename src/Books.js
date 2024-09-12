import * as React from 'react'
const SvgBooks = (props) => (
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
      d="M9 5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 5v14M9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1M5 8h4m0 8h4m1-7 4-1m-2 8 3.923-.98m-6.12-10.46 2.184-.53c.562-.135 1.133.19 1.282.732l3.695 13.418a1.02 1.02 0 0 1-.634 1.219l-.133.041-2.184.53c-.562.135-1.133-.19-1.282-.732L13.036 5.82a1.02 1.02 0 0 1 .634-1.219z"
    />
  </svg>
)
export default SvgBooks
