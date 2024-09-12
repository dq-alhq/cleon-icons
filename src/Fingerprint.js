import * as React from 'react'
const SvgFingerprint = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.03 10.2c-.426 0-.835.19-1.136.527-.3.338-.47.796-.47 1.273 0 .918-.08 2.259-.209 3.6m3.42-2.592c0 2.142 0 5.742-.802 7.992m3.445-.882c.096-.54.345-2.07.401-2.718M4 12c0-1.889.53-3.73 1.516-5.262C6.5 5.205 7.892 4.059 9.49 3.462a7.2 7.2 0 0 1 4.933-.053c1.609.564 3.019 1.68 4.03 3.191M4 15.6h.008m15.891 0c.16-1.8.105-4.819 0-5.4M6.41 18.75c.401-1.35.803-4.05.803-6.75 0-.613.091-1.222.273-1.8M9.34 21c.169-.594.361-1.188.458-1.8M9.62 7.32a4.43 4.43 0 0 1 2.41-.723c.846 0 1.677.25 2.41.724a5.15 5.15 0 0 1 1.763 1.978c.422.821.644 1.753.644 2.701v1.8"
    />
  </svg>
)
export default SvgFingerprint
