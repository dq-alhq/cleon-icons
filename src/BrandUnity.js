import * as React from 'react'
const SvgBrandUnity = (props) => (
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
      d="m12.33 4.936 3.399 2.01c.121.071.126.266 0 .337l-4.038 2.39a.37.37 0 0 1-.38 0l-4.037-2.39c-.124-.068-.126-.269 0-.337l3.395-2.01V1L2 6.132v10.262l3.325-1.968v-4.02c-.003-.143.16-.246.283-.168l4.037 2.39a.39.39 0 0 1 .192.337v4.779c.002.143-.162.245-.285.169l-3.398-2.01-3.323 1.966L11.5 23l8.67-5.131-3.325-1.967-3.397 2.01c-.12.075-.29-.022-.285-.168v-4.779c0-.143.078-.271.192-.337l4.037-2.39c.12-.075.288.02.284.169v4.02L21 16.393V6.132L12.332 1z"
    />
  </svg>
)
export default SvgBrandUnity
