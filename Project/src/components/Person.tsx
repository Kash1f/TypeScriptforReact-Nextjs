interface Props{
    name: string,
    age: number
}

const Person = (props: Props) => {
  return (
    <div>
      <p> Name: {props.name}</p>
      <p>Name: {props.age}</p>
    </div>
  );
};

export default Person;
