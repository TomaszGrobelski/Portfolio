import { forwardRef } from "react"

const Project2 =  forwardRef<HTMLSelectElement>((_,ref) => {
  return (
    <section ref={ref} id='project2'>Project2</section>
  )
})

export default Project2