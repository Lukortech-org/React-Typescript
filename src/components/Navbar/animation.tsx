import React from "react"
import { motion } from "framer-motion"
import { useScrollPosition } from "react-use-scroll-position"

const variants = {
  open: {
    width: "80%",
    margin: "36px auto 0",
    borderRadius: "1em",
    overflow: "hidden",
  },
  closed: { width: "100%", overflow: "hidden" },
}

export const NavbarAnimation: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { y } = useScrollPosition()

  return (
    <motion.div animate={y < 50 ? "open" : "closed"} variants={variants}>
      {children}
    </motion.div>
  )
}

export default NavbarAnimation
