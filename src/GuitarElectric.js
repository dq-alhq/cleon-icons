import * as React from 'react'
const SvgGuitarElectric = (props) => (
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
      strokeWidth={2}
      d="M20.754 3H22v.23h-1.174l-.294.297-5.141 5.189-.142-.141zM7.592 16.836l-.15-.303-.304-.149-4.063-1.995a.16.16 0 0 1-.059-.055A.13.13 0 0 1 3 14.27q0-.039.016-.064a.16.16 0 0 1 .062-.057l4.44-2.24-.691.677.021.022-.098.1-.785.791-.698.704.698.704 3.128 3.157.71.716.71-.716.785-.792.086-.087.021.022.602-.626-2.16 4.362a.1.1 0 0 1-.04.04.14.14 0 0 1-.07.017.14.14 0 0 1-.065-.017.06.06 0 0 1-.027-.026zm4.377-7.14a.2.2 0 0 1 .064.046l2.177 2.197q.024.03.035.05l-.037.15-1.161 2.344-.19-.192-3.128-3.157-.226-.227 2.397-1.21.009-.004h.038q.015 0 .022.004Z"
    />
  </svg>
)
export default SvgGuitarElectric
