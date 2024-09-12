import * as React from 'react'
const SvgCannabis = (props) => (
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
      d="M12 17c.562.78 3 3 5 3 0 0 0-2-1-3.5 1.5 0 2-.5 4-1.5 0 0-1.839-1.38-5-1 1.789-.97 3.279-2.03 5-6 0 0-3.969-.27-6.5 3.5.889-2 1.234-4.03-1.5-9.5 0 0-3.784 4.6-1.5 9.5C7.98 7.7 4 8 4 8c1.721 3.97 3.211 5.03 5 6-3.161-.38-5 1-5 1 2 1 2.5 1.5 4 1.5C7 18 7 20 7 20c2 0 4.437-2.22 5-3m0 0v5"
    />
  </svg>
)
export default SvgCannabis
