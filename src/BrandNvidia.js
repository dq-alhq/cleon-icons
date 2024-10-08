import * as React from 'react'
const SvgBrandNvidia = (props) => (
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
      d="M9.457 9.176V7.915a6 6 0 0 1 .353-.016c3.268-.11 5.41 2.976 5.41 2.976s-2.31 3.396-4.79 3.396c-.329 0-.654-.055-.966-.163v-3.833c1.274.163 1.531.756 2.29 2.103l1.7-1.511S12.21 9.145 10.12 9.145a5 5 0 0 0-.663.031m0-4.176v1.886l.353-.024c4.542-.163 7.508 3.942 7.508 3.942s-3.4 4.378-6.941 4.378a5 5 0 0 1-.913-.085v1.168c.25.031.508.055.758.055 3.298 0 5.684-1.784 7.995-3.888.382.327 1.95 1.114 2.275 1.457-2.195 1.947-7.31 3.514-10.211 3.514-.28 0-.544-.016-.81-.047V19H22V5zm0 9.107v.997c-3.048-.576-3.895-3.933-3.895-3.933s1.465-1.715 3.895-1.995v1.091H9.45c-1.273-.164-2.275 1.098-2.275 1.098s.567 2.127 2.282 2.743m-5.41-3.078S5.85 8.21 9.463 7.914V6.886C5.461 7.229 2 10.812 2 10.812s1.958 5.999 7.457 6.544v-1.09c-4.034-.53-5.41-5.236-5.41-5.236"
    />
  </svg>
)
export default SvgBrandNvidia
