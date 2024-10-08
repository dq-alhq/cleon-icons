import * as React from 'react'
const SvgBrandSteam = (props) => (
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
      d="M11.983 2C6.722 2 2.408 6.05 2 11.198l5.37 2.214a2.84 2.84 0 0 1 1.753-.486l2.389-3.452v-.049c0-1 .4-1.958 1.107-2.664a3.79 3.79 0 0 1 2.67-1.106 3.78 3.78 0 0 1 3.777 3.773c0 2.08-1.695 3.77-3.777 3.77H15.2l-3.403 2.426.003.133a2.82 2.82 0 0 1-1.746 2.614 2.83 2.83 0 0 1-2.879-.427 2.84 2.84 0 0 1-.986-1.63l-3.844-1.589A10.02 10.02 0 0 0 11.983 22C17.515 22 22 17.523 22 12S17.514 2 11.983 2M8.277 17.175l-1.23-.508c.218.452.596.832 1.097 1.041a2.133 2.133 0 0 0 2.903-1.543 2.121 2.121 0 0 0-2.835-2.404l1.272.525a1.567 1.567 0 0 1 .844 2.047 1.567 1.567 0 0 1-2.051.842m9.53-7.753a2.51 2.51 0 0 0-.739-1.775 2.52 2.52 0 0 0-4.104.814 2.51 2.51 0 0 0 .546 2.738 2.518 2.518 0 0 0 4.297-1.777m-4.403-.004a1.886 1.886 0 0 1 1.892-1.888 1.893 1.893 0 0 1 1.891 1.888 1.887 1.887 0 0 1-1.892 1.888 1.89 1.89 0 0 1-1.747-1.165 1.9 1.9 0 0 1-.144-.723"
    />
  </svg>
)
export default SvgBrandSteam
