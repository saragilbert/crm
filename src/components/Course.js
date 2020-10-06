import React from 'react'

const Course = ({ course }) => {
  console.log("props from course", course)
  return(
      <div>

            <div>
               <Header name={course.name} />
               <Content parts={course.parts} />
               <Total parts={course.parts} />
            </div>

      </div>
  )
}

const Header = (props) => {
  return (<h1>{props.name}</h1>)
}

const Content = (props) => {
  console.log("props from content", props);
  return(
    <div>
      {props.parts.map((part, i) => {
        return <Part key={i} name={part.name} ex={part.exercises}/>
      })}
    </div>
    )
}

const Part = (props) => {
  console.log("Part props: ", props)
  return(
    <div>
      <p>{props.name} {props.ex}</p>
    </div>
  )
}

const Total = props => {
  const total = props.parts.reduce(
    (s, p) => s + p.exercises, 0
  )
  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}





export default Course;