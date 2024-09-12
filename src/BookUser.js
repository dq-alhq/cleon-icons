import * as React from 'react'
const SvgBookUser = (props) => (
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
      d="M14.625 12.8c0-.636-.277-1.247-.769-1.697A2.76 2.76 0 0 0 12 10.4m0 0c-.696 0-1.364.253-1.856.703a2.3 2.3 0 0 0-.769 1.697M12 10.4c.966 0 1.75-.716 1.75-1.6S12.966 7.2 12 7.2s-1.75.716-1.75 1.6.784 1.6 1.75 1.6M5 18V6c0-.53.23-1.04.64-1.414C6.05 4.21 6.608 4 7.189 4h10.937c.232 0 .455.084.619.234S19 4.588 19 4.8v14.4a.77.77 0 0 1-.256.566.92.92 0 0 1-.619.234H7.188c-.58 0-1.137-.21-1.547-.586A1.92 1.92 0 0 1 5 18m0 0c0-.53.23-1.04.64-1.414.41-.375.967-.586 1.548-.586H19"
    />
  </svg>
)
export default SvgBookUser
