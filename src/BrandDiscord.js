import * as React from 'react'
const SvgBrandDiscord = (props) => (
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
      d="M19.636 5.404A18 18 0 0 0 15.096 4a13 13 0 0 0-.58 1.188 16.8 16.8 0 0 0-5.037 0A13 13 0 0 0 8.897 4a18.3 18.3 0 0 0-4.542 1.407C1.483 9.681.705 13.846 1.093 17.953a18.3 18.3 0 0 0 5.567 2.808q.677-.915 1.192-1.933a12 12 0 0 1-1.877-.9c.157-.115.31-.234.46-.348a13.02 13.02 0 0 0 11.13 0q.225.186.46.347-.902.535-1.88.903.513 1.017 1.19 1.931a18.2 18.2 0 0 0 5.57-2.808c.458-4.762-.78-8.889-3.27-12.549M8.346 15.427c-1.086 0-1.982-.99-1.982-2.207 0-1.218.865-2.217 1.978-2.217s2.002.999 1.983 2.216c-.02 1.218-.873 2.208-1.98 2.208m7.309 0c-1.087 0-1.98-.99-1.98-2.207 0-1.218.865-2.217 1.98-2.217s1.996.999 1.977 2.216c-.02 1.217-.871 2.208-1.977 2.208"
    />
  </svg>
)
export default SvgBrandDiscord
