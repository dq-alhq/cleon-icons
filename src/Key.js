import * as React from 'react'
const SvgKey = (props) => (
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
      d="M15 9h.01m1.545-5.157 3.602 3.602a2.877 2.877 0 0 1 0 4.07l-2.643 2.642a2.877 2.877 0 0 1-4.069 0l-.301-.3-6.558 6.557a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144-.301-.3a2.88 2.88 0 0 1 0-4.07l2.643-2.643a2.877 2.877 0 0 1 4.069 0"
    />
  </svg>
)
export default SvgKey
