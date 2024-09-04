import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ course }) => {
  console.log('Course',course)
    return (
      <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts}/>
      </>
    )
  }
  
  export default Course