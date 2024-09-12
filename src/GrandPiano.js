import * as React from 'react'
const SvgGrandPiano = (props) => (
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
      strokeWidth={2}
      d="M15.919 2.945q-.003.11.005.218l-.113-.281-.141-.353.292-.014q-.039.214-.043.43Zm-9.14 6.091 6.468-5.073 1.41 3.522zm9.743 1.526.394.017.438.032c1.17.087 1.728.234 1.996.354.12.053.163.093.177.107a.5.5 0 0 1 .082.12l.034.062c.107.198.33.616.82.935.342.223.774.38 1.327.492l.01.517-4.15 1.775 1.563-1.39-2.332-.19-11.465-.926 9.813-1.936c.482.005.91.014 1.293.03ZM3.908 12.056l-.978.149zm13.313 6.026.062-.023-.076.671-.104-.658zm-12.167-.937-.024-.174.04.004z"
    />
  </svg>
)
export default SvgGrandPiano
