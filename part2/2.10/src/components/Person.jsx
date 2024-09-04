
const Person = ({ persons}) => {

console.log(persons)
  return (
    <div>
        {persons.map((content, index) => (
        <p key={content.id}>{content.name} {content.number}</p> 
      ))}
    </div>
  );
};

export default Person;