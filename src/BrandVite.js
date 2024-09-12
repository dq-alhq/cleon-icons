import * as React from 'react'
const SvgBrandVite = (props) => (
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
      d="M22.336 3.504 16.343 4.59 17.385 1 9.069 2.62l-.13 2.177L1.655 3.5c-.502-.029-.794.33-.587.827l10.543 18.39c.227.369.75.383.979 0L22.927 4.327a.56.56 0 0 0-.591-.823m-10.239 18.71L1.772 4.204 8.899 5.47l-.336 5.644 2.922-.67-.814 3.968 2.219-.671-1.102 5.302c-.055.347.4.531.624.035l6.49-12.882-3.203.615.436-1.502 6.087-1.104z"
    />
  </svg>
)
export default SvgBrandVite
