const Total = (props) =>  {
    console.log(props)
    let total = props.content.reduce((s, p) => {
        console.log(' s',s)
        console.log(' p',p.exercises)
      return s + p.exercises;
    },0);
  console.log(total)
    return (
        <p><b>Total of exercises {total}</b></p>
    );
  }

  export default Total;