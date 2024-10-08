import * as React from 'react'
const SvgCookie = (props) => (
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
      d="M8 13v.01M12 17v.01M12 12v.01M16 14v.01M11 8v.01m2.148-4.534 2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296Q19.779 14.328 19.5 15q-.283.683-.66 2.216a3 3 0 0 1-1.624 1.623q-1.572.395-2.216.66-.712.297-1.852 1.025a3 3 0 0 1-2.296 0Q9.649 19.77 9 19.5q-.707-.293-2.216-.66a3 3 0 0 1-1.623-1.624Q4.764 15.639 4.5 15q-.298-.719-1.024-1.852a3 3 0 0 1 0-2.296Q4.195 9.736 4.5 9q.256-.62.66-2.216A3 3 0 0 1 6.784 5.16Q8.331 4.777 9 4.5q.687-.285 1.852-1.024a3 3 0 0 1 2.296 0"
    />
  </svg>
)
export default SvgCookie
