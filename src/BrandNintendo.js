import * as React from 'react'
const SvgBrandNintendo = (props) => (
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
      d="M13.813 22h3.062C19.688 22 22 19.688 22 16.875v-9.75C22 4.313 19.688 2 16.875 2H13.75c-.062 0-.125.062-.125.125v19.75c0 .063.063.125.188.125m3.812-11c1.126 0 2 .938 2 2 0 1.126-.938 2-2 2-1.125 0-2-.875-2-2-.062-1.125.875-2 2-2M11.5 2H7.125C4.313 2 2 4.313 2 7.125v9.75C2 19.688 4.313 22 7.125 22H11.5c.062 0 .125-.062.125-.124V2.125c0-.063-.062-.125-.125-.125m-1.437 18.376H7.125a3.494 3.494 0 0 1-3.5-3.501v-9.75a3.495 3.495 0 0 1 3.5-3.5H10zM5.125 7.999c0 1.063.813 1.875 1.875 1.875A1.84 1.84 0 0 0 8.875 8c0-1.06-.812-1.875-1.875-1.875A1.843 1.843 0 0 0 5.125 8"
    />
  </svg>
)
export default SvgBrandNintendo
