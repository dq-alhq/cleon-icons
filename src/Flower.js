import * as React from 'react'
const SvgFlower = (props) => (
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
      d="M9 12a3 3 0 0 0 6 0m-6 0a3 3 0 0 1 6 0m-6 0-2.664.366q-1.285.21-1.846.536a3.01 3.01 0 0 0-.327 4.977 2.97 2.97 0 0 0 3.307.219q.522-.305 1.27-1.205L10.5 15l-.724 1.36Q9 18.157 9 19a3 3 0 0 0 6 0q-.001-.841-.776-2.64L13.5 15l1.76 1.893q.748.902 1.27 1.205A2.97 2.97 0 0 0 20.6 17a3.01 3.01 0 0 0-1.09-4.098c-.412-.239-1.11-.431-2.11-.576L15 12m-6 0-2.4-.325c-1-.145-1.698-.337-2.11-.576a3.01 3.01 0 0 1-.327-4.978A2.97 2.97 0 0 1 7.47 5.9q.522.304 1.27 1.205L10.5 9Q9 5.562 9 5a3 3 0 1 1 6 0q0 .843-.776 2.64L13.5 9l1.76-1.893q.748-.899 1.27-1.205a2.97 2.97 0 0 1 4.07 1.099 3.01 3.01 0 0 1-1.09 4.098q-.561.326-1.846.535L15 12"
    />
  </svg>
)
export default SvgFlower
