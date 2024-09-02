import * as React from "react";
const SvgIconPumpkinScary = (props) => (
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
      d="m9 15 1.5 1 1.5-1 1.5 1 1.5-1m-5-4h.01M14 11h.01M12 6c-.875 0-1.699.315-2.415.869-1.01-.721-1.5-1.031-2.585-.787-2.609.588-3.627 4.163-2.724 7.983.904 3.82 2.751 6.441 5.36 5.853q.405-.091.774-.28c.5.235 1.034.362 1.59.362a3.7 3.7 0 0 0 1.59-.361q.37.187.774.279c2.609.587 4.456-2.033 5.359-5.853.904-3.821-.114-7.395-2.723-7.983-1.085-.244-1.575.066-2.585.788C13.699 6.315 12.876 6 12 6m0 0c0-1.226.693-2.346 1.789-2.894L14 3"
    />
  </svg>
);
export default SvgIconPumpkinScary;
