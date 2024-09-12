import * as React from 'react'
const SvgBrandNeovim = (props) => (
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
      d="M4 6.128v11.346L8.448 22V10.595l-3.55-5.39zm4.087 14.984-3.726-3.79V6.28l.483-.497 3.243 4.924zM20 17.398l-.705.78-3.466-5.313V2l4.143 4.243zM8.265 2 18.89 18.53l-2.974 3.03L5.286 5.07z"
    />
  </svg>
)
export default SvgBrandNeovim
