import * as React from "react";
const SvgIconCloudDownload = (props) => (
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
      d="M19 18a3.5 3.5 0 1 0 0-7h-1c.146-.65.148-1.32.006-1.97a4.8 4.8 0 0 0-.831-1.823 5.4 5.4 0 0 0-1.544-1.398 6 6 0 0 0-2.02-.759 6.2 6.2 0 0 0-2.19-.006 6 6 0 0 0-2.024.749C8.157 6.533 7.295 7.687 7 9a4.75 4.75 0 0 0-2.966.886 4.4 4.4 0 0 0-1.7 2.487 4.23 4.23 0 0 0 .34 2.954A4.5 4.5 0 0 0 4.9 17.4M12 13v9m0 0-3-3m3 3 3-3"
    />
  </svg>
);
export default SvgIconCloudDownload;
