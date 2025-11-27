import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Button({ to, href, variant = 'primary', children }) {
  const className = `btn btn-${variant}`
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return <button className={className}>{children}</button>
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>
}

export function Card({ children, to }) {
  const content = (
    <motion.div
      className="card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
  if (to) {
    return (
      <Link to={to} className="card-link">
        {content}
      </Link>
    )
  }
  return content
}
