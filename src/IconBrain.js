import * as React from "react";
const SvgIconBrain = (props) => (
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
      d="M12 5.009a2.999 2.999 0 1 0-5.996.125M12 5.009v13m0-13a2.999 2.999 0 1 1 5.997.125m-11.994 0a4 4 0 0 0-2.526 5.77m2.526-5.77a3 3 0 0 0 .398 1.375m-2.924 4.395a4 4 0 0 0 .556 6.588m-.556-6.588q.275-.224.585-.395m-.03 6.983a4 4 0 1 0 7.968.517m-7.967-.517A4 4 0 0 0 6 18.009m6 0a4.002 4.002 0 0 0 5.824 3.556 4 4 0 0 0 2.143-4.073m-1.97-12.358a4 4 0 0 1 2.526 5.77m-2.526-5.77a3 3 0 0 1-.398 1.375m2.924 4.395a4 4 0 0 1-.556 6.588m.556-6.588a4 4 0 0 0-.585-.395m.029 6.983a4 4 0 0 1-1.967.517m-3-5a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"
    />
  </svg>
);
export default SvgIconBrain;
