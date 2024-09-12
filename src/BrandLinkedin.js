import * as React from 'react'
const SvgBrandLinkedin = (props) => (
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
      d="M18.984 3H4.296A1.296 1.296 0 0 0 3 4.296v14.688a1.296 1.296 0 0 0 1.296 1.296h14.688a1.295 1.295 0 0 0 1.296-1.296V4.296A1.296 1.296 0 0 0 18.984 3m-10.8 14.688H5.592V9.912h2.592zM6.888 8.4a1.512 1.512 0 1 1 1.555-1.512A1.536 1.536 0 0 1 6.888 8.4m10.8 9.288h-2.592v-4.095c0-1.227-.518-1.668-1.192-1.668a1.5 1.5 0 0 0-1.4 1.607.6.6 0 0 0 0 .121v4.035H9.912V9.912h2.506v1.123a2.69 2.69 0 0 1 2.332-1.21c1.34 0 2.903.744 2.903 3.163z"
    />
  </svg>
)
export default SvgBrandLinkedin
