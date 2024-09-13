import * as React from 'react'
const SvgBrandGoogle = (props) => (
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
    <path fill="currentColor" d="M21.816 11.818q-.002-1.02-.175-1.963H12.6v3.718h5.167a4.42 4.42 0 0 1-1.93 2.888v2.418h3.116c1.816-1.676 2.863-4.138 2.863-7.061" />
    <path fill="currentColor" d="M12.599 21.2c2.592 0 4.766-.854 6.354-2.321l-3.116-2.418c-.855.576-1.946.925-3.238.925-2.496 0-4.618-1.684-5.376-3.953H4.029v2.478C5.61 19.045 8.846 21.2 12.6 21.2" />
    <path fill="currentColor" d="M7.224 13.424a5.8 5.8 0 0 1-.305-1.824c0-.637.113-1.248.305-1.824V7.297H4.03a9.5 9.5 0 0 0 0 8.606l2.486-1.938z" />
    <path fill="currentColor" d="M12.599 5.823c1.414 0 2.67.488 3.674 1.43l2.75-2.748C17.355 2.95 15.19 2 12.597 2c-3.754 0-6.99 2.155-8.57 5.297l3.194 2.479c.758-2.27 2.881-3.953 5.377-3.953" />
  </svg>
)
export default SvgBrandGoogle
