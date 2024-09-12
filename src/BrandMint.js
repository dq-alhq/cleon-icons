import * as React from 'react'
const SvgBrandMint = (props) => (
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
      d="M6.532 6.922v7.031a3.137 3.137 0 0 0 3.125 3.125h4.687a3.137 3.137 0 0 0 3.125-3.125v-3.906a2.356 2.356 0 0 0-2.344-2.344 2.33 2.33 0 0 0-1.562.615A2.33 2.33 0 0 0 12 7.703a2.356 2.356 0 0 0-2.343 2.344v3.906h1.562v-3.906c0-.441.34-.781.781-.781.44 0 .782.34.782.78v3.907h1.562v-3.906c0-.441.34-.781.781-.781.44 0 .782.34.782.78v3.907a1.55 1.55 0 0 1-1.563 1.563H9.657a1.55 1.55 0 0 1-1.563-1.563V6.922zM12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2m0 1.563A8.425 8.425 0 0 1 20.438 12 8.426 8.426 0 0 1 12 20.438 8.427 8.427 0 0 1 3.563 12 8.425 8.425 0 0 1 12 3.563"
    />
  </svg>
)
export default SvgBrandMint
