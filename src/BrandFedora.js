import * as React from 'react'
const SvgBrandFedora = (props) => (
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
      d="M12 2C6.5 2 2 6.47 2 12v7.73C2 21 3 22 4.27 22H12c5.53 0 10-4.5 10-10S17.5 2 12 2m2.03 4.12c1.68 0 3.26 1.28 3.26 3.06 0 .16 0 .32-.02.51-.05.47-.48.81-.95.75a.837.837 0 0 1-.7-.98c0-.06.01-.14.01-.28 0-1.01-.82-1.4-1.6-1.4s-1.48.66-1.48 1.4c.01.85 0 1.7 0 2.56l1.45-.02c1.12-.02 1.13 1.68 0 1.67l-1.45.01-.01 2.39c-.18 1.88-1.77 3.37-3.69 3.37-2.03 0-3.71-1.66-3.71-3.7A3.8 3.8 0 0 1 9 11.74l1.15-.01v1.67L9 13.41h-.03c-1.16.03-2.15.82-2.16 2.06 0 1.12.91 2.03 2.04 2.03 1.15 0 2.03-.83 2.03-2.03.02-2.01-.01-4.22 0-6.3 0-.12.01-.21.02-.34.19-1.54 1.57-2.71 3.13-2.71"
    />
  </svg>
)
export default SvgBrandFedora