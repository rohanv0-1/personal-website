import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  enter: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.99 },
}

export function PageTransition({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}
