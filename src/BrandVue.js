import * as React from 'react'
const SvgBrandVue = (props) => (
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
      fill="currentColor"
      d="M23 3h-9.112L12 6.075 10.112 3H1l11 18zM12 13.802 5.73 3.537h4.06L12 7.157l2.21-3.62h4.06z"
    />
  </svg>
)
export default SvgBrandVue
