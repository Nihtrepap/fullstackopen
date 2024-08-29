const Header = (props) =>  {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) =>  {
  return (
    <div>
      {props.content.map((content, index) => (
        <p key={index}>{content.type} {content.exercises}</p>
      ))}
    </div>
  );
}

const Total = (props) =>  {
  let total = 0;
  props.content.forEach(content => {
    total += content.exercises;
  })

  return (
      <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    { type:'Fundamentals of React', exercises:10 },
    { type:'Using props to pass data', exercises:7 },
    { type:'State of a component', exercises:14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content}/>
      <Total content={content}/>
      </div>
  )
}

export default App