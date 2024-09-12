import * as React from 'react'
const SvgBrandNginx = (props) => (
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
      d="M12 2 3 7v10l9 5 9-5V7zm5.195 13.825c0 .588-.56 1.075-1.324 1.075-.546 0-1.17-.212-1.56-.675l-5.194-5.95v5.55c0 .6-.494 1.074-1.103 1.074h-.066c-.624 0-1.117-.5-1.117-1.075V8.175c0-.588.546-1.075 1.299-1.075.56 0 1.195.213 1.584.675l5.17 5.95v-5.55c0-.6.519-1.075 1.116-1.075h.065c.623 0 1.117.5 1.117 1.075v7.65z"
    />
  </svg>
)
export default SvgBrandNginx
