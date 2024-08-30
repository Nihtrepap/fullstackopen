import Part from "./Part";

const Content = (props) =>  {
    console.log('Content', props)

    return (
      <div>
        {props.content.map((content, index) => (
          <Part key={content.id} part={content}/>
        ))}
      </div>
    );
  }

  export default Content;