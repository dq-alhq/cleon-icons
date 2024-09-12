import * as React from 'react'
const SvgBrandSublimeText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.72 1.003a.4.4 0 0 0-.175.016l-17.094 5.1a.66.66 0 0 0-.392.365.35.35 0 0 0-.058.202v5.249a.35.35 0 0 0 .058.201.67.67 0 0 0 .392.364l7.261 2.167-7.261 2.167a.67.67 0 0 0-.451.6v5.214c0 .259.203.407.451.333l17.096-5.102a.67.67 0 0 0 .44-.55c.003-.02.013-.036.013-.06v-5.214a.67.67 0 0 0-.451-.601l-7.186-2.145 7.184-2.144a.67.67 0 0 0 .45-.601V1.352c0-.194-.114-.326-.276-.349"
    />
  </svg>
)
export default SvgBrandSublimeText
