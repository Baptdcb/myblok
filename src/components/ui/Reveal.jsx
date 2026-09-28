import { useReveal } from '../../hooks.js'

// Reveal wrapper — fade/rise in on scroll.
export function Reveal({ children, as: Tag = 'div', delay, className = '', ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} data-d={delay} {...rest}>
      {children}
    </Tag>
  )
}
