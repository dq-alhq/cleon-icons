import * as React from 'react'
const SvgBrushMakeup = (props) => (
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
      d="m9.26 9.374 5.366 5.366M9.259 9.374l-.001-.002-5.147 5.15a3.795 3.795 0 0 0 5.367 5.367l5.148-5.149M9.259 9.374l2.592-5.552a1.424 1.424 0 0 1 2.297-.406l6.436 6.437a1.423 1.423 0 0 1-.406 2.296l-5.552 2.591m-7.448-3.285 5.367 5.366m3.06-11.95-1.698 2.683m4.985.604-2.684 1.697"
    />
  </svg>
)
export default SvgBrushMakeup
