import * as React from 'react'
const SvgBrandRemix = (props) => (
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
      d="M20.21 17.423c.186 2.311.186 3.395.186 4.577h-5.539c0-.258.005-.493.01-.732.015-.743.03-1.517-.095-3.081-.164-2.29-1.186-2.799-3.064-2.799H3.001v-4.166h8.973c2.372 0 3.558-.696 3.558-2.541 0-1.622-1.186-2.604-3.558-2.604H3V2h9.962C18.332 2 21 4.448 21 8.36c0 2.926-1.878 4.833-4.414 5.152 2.14.414 3.392 1.59 3.623 3.911M3 22v-3.106h5.856c.978 0 1.19.7 1.19 1.119V22z"
    />
  </svg>
)
export default SvgBrandRemix
