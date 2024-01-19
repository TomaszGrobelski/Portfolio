import { forwardRef } from "react"

const Contact = forwardRef<HTMLSelectElement>((_,ref) => {
  return (
    <section ref={ref}>Contact</section>
  )
})

export default Contact